import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { MovieService } from '../../../services/movie.service';
import { MovieRequest } from '../../../models/movie.models';

@Component({
  selector: 'app-create-movie-modal',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './create-movie-modal.html',
  styleUrl: './create-movie-modal.css'
})
export class CreateMovieModal {
  movieForm: FormGroup;

  streamings = [
    { id: 1, name: 'Netflix' },
    { id: 2, name: 'Amazon Prime Video' },
    { id: 3, name: 'Disney+' },
    { id: 4, name: 'HBO Max' }
  ];

  categories = [
    { id: 1, name: 'Ação' },
    { id: 2, name: 'Comédia' },
    { id: 3, name: 'Drama' },
    { id: 4, name: 'Ficção Científica' },
    { id: 5, name: 'Terror' }
  ];

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private router: Router
  ) {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      releaseDate: ['', Validators.required],
      rating: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      streamingId: ['', Validators.required],
      categoryId: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.movieForm.valid) {
      const rawDate = this.movieForm.value.releaseDate;

      // CONVERSÃO DE DATA: yyyy-MM-dd -> dd/MM/yyyy
      const [year, month, day] = rawDate.split('-');
      const formattedDate = `${day}/${month}/${year}`;

      const movieData: MovieRequest = {
        title: this.movieForm.value.title,
        description: this.movieForm.value.description,
        releaseDate: formattedDate,
        rating: this.movieForm.value.rating,
        streamingsIds: [Number(this.movieForm.value.streamingId)],
        categoriesIds: [Number(this.movieForm.value.categoryId)]
      };

      console.log('Enviando filme:', movieData);

      this.movieService.save(movieData).subscribe({
        next: (response) => {
          Swal.fire({
            title: 'Sucesso!',
            text: 'Filme cadastrado no catálogo.',
            icon: 'success',
            confirmButtonColor: '#E50914',
            background: '#141414',
            color: '#fff'
          }).then(() => {
            this.router.navigate(['/home']);
          });
        },
        error: (err) => {
          console.error(err);
          Swal.fire({
            title: 'Erro!',
            text: 'Não foi possível cadastrar o filme. Verifique os dados.',
            icon: 'error',
            confirmButtonColor: '#E50914',
            background: '#141414',
            color: '#fff'
          });
        }
      });
    } else {
      Swal.fire({
        title: 'Campos Inválidos',
        text: 'Preencha todos os campos corretamente.',
        icon: 'warning',
        confirmButtonColor: '#E50914',
        background: '#141414',
        color: '#fff'
      });
    }
  }
}
