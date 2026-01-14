import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { UserRequest } from '../../../models/auth.models';

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
          console.log('Sucesso!', response);
          alert('Conta criada com sucesso! Faça login.');
          this.router.navigate(['/login']);
        },
        error: (erro) => {
          console.error('Erro ao cadastrar:', erro);
          alert('Erro ao criar conta. Verifique os dados.');
        }
      });
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }
}
