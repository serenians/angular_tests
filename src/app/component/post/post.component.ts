import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  Posts: Post[]

  constructor(private postService : PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.Posts = posts;
    });
  }

}
