import { Component } from '@angular/core';
import { Card } from '../../models/card.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-table-tarjeta',
  templateUrl: './table-tarjeta.component.html',
  styleUrls: ['./table-tarjeta.component.scss']
})
export class TableTarjetaComponent {

  tarjetas: Card[] = [];
  userIdString = '';
  userId: number = 0;

 
  constructor(private cardService: CardService ) {   }


  ngOnInit() {

    this.userIdString = localStorage.getItem('userId') ?? '';
    this.userId = parseInt(this.userIdString, 10);

    this.cardService.getCards(this.userId)
    .subscribe((result) => {
      this.tarjetas = result
  })};

}
