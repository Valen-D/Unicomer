import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Task } from '../shared/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }

  getTasks(userId: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') // Ajusta según tu autenticación
    });

    return this.httpClient.get<Task[]>(
      `${environment.dataBaseUrl}/task/user/${userId}`,
      { headers: headers }
    );
  }

  postTaskDeposit(requestBody: Task) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') // Ajusta según tu autenticación
    });

    return this.httpClient.post(
      `${environment.dataBaseUrl}/task/deposit`,
      requestBody,
      { headers: headers }
    );
  }

  postTaskTransfer(requestBody: Task) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') // Ajusta según tu autenticación
    });

    return this.httpClient.post(
      `${environment.dataBaseUrl}/task/transfer`,
      requestBody,
      { headers: headers }
    );
  }

  postTaskWithdraw(requestBody: Task) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') // Ajusta según tu autenticación
    });

    return this.httpClient.post(
      `${environment.dataBaseUrl}/task/withdraw`,
      requestBody,
      { headers: headers }
    );
  }
}
