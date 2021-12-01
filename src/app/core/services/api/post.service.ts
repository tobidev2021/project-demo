import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private apiService: ApiService) { }

  getPosts(): Observable<any> {
    return this.apiService.get(`${environment.apiUrl}/posts`);
  }

  getPostById(id: number): Observable<any> {
    return this.apiService.get(`${environment.apiUrl}/posts/${id}`);
  }

  createPost(body: Object): Observable<any> {
    return this.apiService.post(`${environment.apiUrl}/posts`, body);
  }

  updatePost(id: number, body: Object): Observable<any> {
    return this.apiService.put(`${environment.apiUrl}/posts/${id}`, body);
  }

}
