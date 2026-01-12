import { Component } from '@angular/core';
import {CreateMovieModal} from '../../../componentes/logged/create-movie-modal/create-movie-modal';

@Component({
  selector: 'app-create-movie',
  imports: [
    CreateMovieModal
  ],
  templateUrl: './create-movie.html',
  styleUrl: './create-movie.css'
})
export class CreateMovie {

}
