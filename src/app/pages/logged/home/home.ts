import { Component } from '@angular/core';
import {Header} from '../../../componentes/logged/header/header';
import {Card} from '../../../componentes/logged/card/card';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    Card
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
