import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header } from '../../../componentes/logged/header/header';
import { Card } from '../../../componentes/logged/card/card';
import { MovieService } from '../../../services/movie.service';
import { MovieResponse } from '../../../models/movie.models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    Header,
    Card,
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies() {
    this.movieService.findAll().subscribe({
      next: (data: MovieResponse[]) => {
        const sortedMovies = data.sort((a, b) => (b.rating || 0) - (a.rating || 0));

        this.movies = sortedMovies.map((apiMovie, index) => {
          return {
            title: apiMovie.title,
            description: apiMovie.description,
            approvalRating: Math.round((apiMovie.rating || 0) * 10),
            providers: apiMovie.streamings.map((s: any) => s.name),
            rank: index < 5 ? index + 1 : null,
            duration: this.generateRandomDuration(),
            ageRating: this.generateRandomAgeRating()
          };
        });
      },
      error: (err) => {
        console.error('Erro ao buscar filmes:', err);
      }
    });
  }

  // --- Funções Auxiliares para preencher dados que nao estao no Back ---

  private generateRandomDuration(): string {
    const hours = Math.floor(Math.random() * (3 - 1 + 1) + 1); // 1 a 3 horas
    const minutes = Math.floor(Math.random() * 60);
    return `${hours}h ${minutes.toString().padStart(2, '0')}m`;
  }

  private generateRandomAgeRating(): string {
    const ratings = ['L', '10', '12', '14', '16', '18'];
    const randomIndex = Math.floor(Math.random() * ratings.length);
    return ratings[randomIndex];
  }
}
