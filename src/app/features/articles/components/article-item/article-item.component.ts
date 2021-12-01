import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {
  @Input() article;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  editArticle(id) {
    this.router.navigate(['dashboard/edit', id]);
  }

}
