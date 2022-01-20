import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';
import { BadInput } from '../common/bad-input';
import { AppError } from '../common/app-error';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:any[] | undefined;
 

  constructor(private service : PostService) { 
  }

  ngOnInit(): void {
    this.service.getAll().subscribe(posts=>this.posts=posts as any[]);
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts?.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          //post?['id'] = newPost.id;
        },
        (error: AppError) => {
          this.posts?.splice(0, 1);

          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          }
          else throw error;
        });
  }
  
  updatePost(post:any) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
  }

  deletePost(post:any) {
    this.service.delete(post.id);
    let index = this.posts?.indexOf(post);
    if(index)
      this.posts?.splice(index,1)
  }
}
