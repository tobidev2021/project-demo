import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PostService } from './core/services/api/post.service';
import { UserService } from './core/services/api/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cambridge-university-press-demo';
  constructor() {
  }
}
