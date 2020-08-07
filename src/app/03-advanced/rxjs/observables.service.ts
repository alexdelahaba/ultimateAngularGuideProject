import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ObservablesService {
  urlUsuarios = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get(this.urlUsuarios);
  }
}
