import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private apiService: ApiService) { }

  getUsers(): Observable<any> {
    return this.apiService.get(`${environment.apiUrl}/users`);
  }
}
