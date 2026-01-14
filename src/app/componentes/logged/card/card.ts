import { NgClass } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card implements OnInit, OnDestroy {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() duration: string = '';
  @Input() ageRating: string = '';
  @Input() releaseDate: string = '';
  @Input() providers: string[] = [];
  @Input() approvalRating: number = 0;
  @Input() rank: number | null = null;

  currentProvider: string = '';
  private currentIndex: number = 0;
  private intervalId: any;

  ngOnInit(): void {
    if (this.providers && this.providers.length > 0) {
      this.currentProvider = this.providers[0];

      if (this.providers.length > 1) {
        this.startStreamingCycle();
      }
    } else {
      this.currentProvider = 'Indisponível';
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startStreamingCycle() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.providers.length;
      this.currentProvider = this.providers[this.currentIndex];
    }, 2000);
  }

  get isTop10(): boolean {
    return this.rank !== null && this.rank >= 1 && this.rank <= 10;
  }

  get isGoodRating(): boolean {
    return this.approvalRating >= 60;
  }
}
