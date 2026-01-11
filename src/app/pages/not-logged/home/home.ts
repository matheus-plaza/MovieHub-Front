import { Component } from '@angular/core';
import { Header } from '../../../componentes/not-logged/header/header';
import { SignUp } from '../../../componentes/not-logged/sign-up/sign-up';

@Component({
  selector: 'app-home',
  imports: [Header, SignUp],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
