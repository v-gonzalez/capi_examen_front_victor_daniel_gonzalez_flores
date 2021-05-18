import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private heroesUrl = 'http://127.0.0.1:8000/api/users';
  constructor(
    private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.heroesUrl)
  }
}