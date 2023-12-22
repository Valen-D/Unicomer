import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-card-balance',
  templateUrl: './card-balance.component.html',
  styleUrls: ['./card-balance.component.scss']
})
export class CardBalanceComponent {

  user: User | undefined;
  balance:number = 0;
  userIdString = '';
  userId: number = 0;

 
  constructor(private userService: UserService ) {   }


  ngOnInit() {

    this.userIdString = localStorage.getItem('userId') ?? '';
    this.userId = parseInt(this.userIdString, 10);

    this.userService.getBalance(this.userId)
    .subscribe((result) => {
      this.user = result
    
    this.balance = this.user['balance']
    
    console.log(this.user) 
    console.log(this.balance)

  })};
}
