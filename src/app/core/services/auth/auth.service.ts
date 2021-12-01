import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    console.log(token);
    // Check if token is valid
    if (token) {
      return true;
    }

    return false;
  }
}
