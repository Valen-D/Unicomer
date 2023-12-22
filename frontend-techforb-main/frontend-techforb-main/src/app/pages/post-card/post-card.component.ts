import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
  
  cardForm: FormGroup;
  userIdString = '';
  userId: number = 0;

  constructor(private cardService: CardService, private router: Router) {
    this.cardForm = new FormGroup({
      'name' : new FormControl('', Validators.required),
      'number' : new FormControl('', Validators.required),
      'fecha' : new FormControl('', Validators.required),
      'codigo' : new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.userIdString = localStorage.getItem('userId') ?? '';
    this.userId = parseInt(this.userIdString, 10);
    console.log(this.userId)
  }

  onSubmit() {
    const newCard = {
      "name": this.cardForm.value.name,
      "number": this.cardForm.value.number,
      "expirationDate": this.cardForm.value.fecha,
      "securityCode": this.cardForm.value.codigo,
      "user": {
        "id": this.userId
      }
    }

    console.log(newCard)
    this.cardService.postCard(newCard)
      .subscribe((result) => {
          console.log(result)
          alert("Tarjeta registrada!")
    });
}}
