import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() duration: string = '';
  @Input() ageRating: string = '';
  @Input() releaseDate: string = '';
  @Input() provider: string = '';
  @Input() approvalRating: number = 0;
  @Input() rank: number | null = null;

  get isTop10(): boolean {
    return this.rank !== null && this.rank >= 1 && this.rank <= 10;
  }

  get isGoodRating(): boolean {
    return this.approvalRating >= 60;
  }
}
