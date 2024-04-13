import { Component, Input } from '@angular/core';

interface Plano {
  plano: string;
  preco: string;
}



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() planType: string = '';
  @Input() planPrice: number = 0;
}
