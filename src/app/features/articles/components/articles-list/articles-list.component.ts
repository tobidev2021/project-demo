import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PostService } from 'src/app/core/services/api/post.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  articleData;
  articleDisplay = [];
  formGroup: FormGroup;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => {
      console.log(value);
      this.articleData = value;
      this.articleDisplay = [...this.articleData];
    });
    this.formGroup = new FormGroup({
      searchText: new FormControl('')
    });
    this.formGroup.get('searchText').valueChanges
      .subscribe((term): void => {
        const searchText = this.articleData.filter((article) => article.title.startsWith(term));
        this.articleDisplay = [...searchText];
      });
    
  }

}
