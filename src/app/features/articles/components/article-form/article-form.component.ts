import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/core/services/api/post.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
  articleId;
  article;
  formGroup: FormGroup;
  constructor(private route: ActivatedRoute,private router: Router, private postService: PostService) { }

  ngOnInit(): void {
    this.articleId = this.route.snapshot.params.id;
    this.formGroup = new FormGroup({
      id: new FormControl(this.articleId),
      userId: new FormControl(''),
      title: new FormControl(''),
      body: new FormControl('')
    });
    if (this.articleId) {
      this.postService.getPostById(this.articleId).subscribe(article => {
        this.formGroup.get('userId').setValue(article.userId);
        this.formGroup.get('title').setValue(article.title);
        this.formGroup.get('body').setValue(article.body);
      });
    }
  }

  save(): void {
    if (this.articleId) {
      const body = this.formGroup.value;
      this.postService.updatePost(this.articleId, body).subscribe(value => {
        console.log('Edit article', value);
        this.goToHomePage();
      });
    } else {
      this.formGroup.removeControl('id');
      this.formGroup.get('userId').setValue(1);
      const body = this.formGroup.value;
      this.postService.createPost(body).subscribe(value => {
        console.log('Create article', value);
        this.goToHomePage();
      });
    }
  }

  goToHomePage(): void {
    this.router.navigate(['/dashboard']);
  }

}
