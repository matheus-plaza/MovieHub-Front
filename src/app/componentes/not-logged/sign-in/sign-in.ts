import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { LoginRequest } from '../../../models/auth.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css'
})
export class SignIn {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials: LoginRequest = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };

      this.authService.login(credentials).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);

          Swal.fire({
            title: 'Login realizado!',
            text: 'Redirecionando para o catálogo...',
            icon: 'success',
            timer: 1000,
            showConfirmButton: false,
            background: '#141414',
            color: '#ffffff',
            willClose: () => {
              this.router.navigate(['/home']);
            }
          });
        },
        error: (err) => {
          Swal.fire({
            title: 'Acesso Negado',
            text: 'E-mail ou senha incorretos. Tente novamente.',
            icon: 'error',
            confirmButtonText: 'Tentar de novo',
            confirmButtonColor: '#E50914',
            background: '#141414',
            color: '#ffffff'
          });
        }
      });
    } else {
      Swal.fire({
        title: 'Campos Inválidos',
        text: 'Por favor, preencha seu e-mail e senha.',
        icon: 'warning',
        confirmButtonColor: '#E50914',
        background: '#141414',
        color: '#ffffff'
      });
    }
  }
}
