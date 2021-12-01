import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PostService } from 'src/app/core/services/api/post.service';
import { UserService } from 'src/app/core/services/api/user.service';

@Component({
  selector: 'app-articles',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticlesComponent implements OnInit {
  currentRoute: string;
  isEdit = false;
  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = router.url;
        this.isEdit = this.currentRoute.startsWith('/dashboard/edit');
      }
    });
  }

  ngOnInit(): void {
  }

  createArticle(): void {
    this.router.navigate(['dashboard/create']);
  }

}
