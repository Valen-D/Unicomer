import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Card } from '../shared/models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient: HttpClient) { }

  getCards(userId: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') // Ajusta según tu autenticación
    });

    return this.httpClient.get<Card[]>(
      `${environment.dataBaseUrl}/card/user/${userId}`,
      { headers: headers }
    );
  }

  postCard(requestBody: Card) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') // Ajusta según tu autenticación
    });

    return this.httpClient.post(
      `${environment.dataBaseUrl}/card`,
      requestBody,
      { headers: headers }
    );
  }
}
