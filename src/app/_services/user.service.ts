import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';

const baseUrl = `${environment.apiUrl}/users`;
const token = `${environment.token}`;

@Injectable({ providedIn: 'root' })
export class UserService {
  headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  constructor(private http: HttpClient) {}

  getAll() {
    console.log(baseUrl);
    return this.http.get<User[]>(baseUrl);
  }

  getById(id: string) {
    return this.http.get<User>(`${baseUrl}/${id}`);
  }

  create(params: any) {
    return this.http.post(baseUrl, params, { headers: this.headers });
  }

  update(id: string, params: any) {
    return this.http.put(`${baseUrl}/${id}`, params, { headers: this.headers });
  }

  delete(id: string) {
    return this.http.delete(`${baseUrl}/${id}`, { headers: this.headers });
  }
}
