import { Component } from '@angular/core';

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
  // @ts-ignore
  plano: Plano = {
    plano: 'Simples',
    preco: 'R$ 100,00',
  };
}
