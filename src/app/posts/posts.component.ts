import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';


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
    this.service.getPosts().subscribe(
      response => {
          console.log("data",response);
      },
      error => {
        //This should be a Toast
        //Log this error
          alert('An unexpected error occured');
          console.log(console.error);
          
      }
    )
  }

}
