import { Component } from '@angular/core';
import { Header } from '../../../componentes/not-logged/header/header';
import { SignIn } from '../../../componentes/not-logged/sign-in/sign-in';

@Component({
  selector: 'app-sign-in-page',
  imports: [Header, SignIn],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css'
})
export class SignInPage {

}
