import { Component } from '@angular/core';
import { Header } from "../../../componentes/not-logged/header/header";
import { SignUp } from '../../../componentes/not-logged/sign-up/sign-up';

@Component({
  selector: 'app-sign-up-page',
  imports: [
    Header,
    SignUp
  ],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUpPage {

}
