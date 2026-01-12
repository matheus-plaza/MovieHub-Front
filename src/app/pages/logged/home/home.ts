import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Header} from '../../../componentes/logged/header/header';
import {Card} from '../../../componentes/logged/card/card';
import {RouterLink} from '@angular/router';

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
export class Home {
  movies = [
    {
      title: 'O Poderoso Chefão',
      description: 'Don Corleone, chefe da máfia, precisa passar o legado para seu filho Michael.',
      duration: '2h 55m',
      ageRating: '16',
      provider: 'Claro-tv',
      approvalRating: 98,
      rank: 1
    },
    {
      title: 'Oppenheimer',
      description: 'A história do cientista J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica.',
      duration: '3h 00m',
      ageRating: '16',
      provider: 'Prime Video',
      approvalRating: 95,
      rank: 2
    },
    {
      title: 'Barbie',
      description: 'Barbie sofre uma crise de identidade e viaja para o mundo real para entender seu lugar.',
      duration: '1h 54m',
      ageRating: '12',
      provider: 'HBO Max',
      approvalRating: 88,
      rank: 3
    },
    {
      title: 'Homem-Aranha',
      description: 'Miles Morales é catapultado através do Multiverso, onde encontra uma equipe de Pessoas-Aranha.',
      duration: '2h 20m',
      ageRating: '10',
      provider: 'Disney+',
      approvalRating: 96,
      rank: 4
    },
    {
      title: 'Filme Ruim Exemplo',
      description: 'Apenas um exemplo de filme com nota baixa para testar o card.',
      duration: '1h 30m',
      ageRating: 'L',
      provider: 'Netflix',
      approvalRating: 40,
      rank: null
    },
    {
      title: 'Interestelar',
      description: 'Um grupo de astronautas viaja através de um buraco de minhoca em busca de um novo lar.',
      duration: '2h 49m',
      ageRating: '10',
      provider: 'HBO Max',
      approvalRating: 92,
      rank: 5
    }
  ];
}
