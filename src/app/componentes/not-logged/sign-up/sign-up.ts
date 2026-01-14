import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { UserRequest } from '../../../models/auth.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const userData: UserRequest = {
        name: this.signupForm.value.name,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password
      };

      console.log('Enviando dados:', userData);

      this.authService.register(userData).subscribe({
        next: (response) => {
          Swal.fire({
            title: 'Bem-vindo ao MovieHub!',
            text: 'Sua conta foi criada com sucesso.',
            icon: 'success',
            confirmButtonText: 'Fazer Login',
            confirmButtonColor: '#E50914',
            background: '#141414',
            color: '#ffffff'
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/login']);
            }
          });
        },
        error: (erro) => {
          Swal.fire({
            title: 'Ops!',
            text: 'Erro ao criar conta. Verifique se o e-mail já existe.',
            icon: 'error',
            confirmButtonColor: '#E50914',
            background: '#141414',
            color: '#ffffff'
          });
        }
      });
    } else {
      Swal.fire({
        title: 'Atenção',
        text: 'Preencha todos os campos corretamente!',
        icon: 'warning',
        confirmButtonColor: '#E50914',
        background: '#141414',
        color: '#ffffff'
      });
    }
  }
}
