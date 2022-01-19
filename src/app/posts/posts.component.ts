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
    this.service.getPosts()
      .subscribe(
        response => {
            console.log("data",response);
        },
        (error:Response) => {
          if(error.status === 400 ){
            //Expected error bad request
            //Serialize data to API response object 
            //Add the errors to form
          }
          if(error.status === 404 ){
            //Expected error not found
          }
          
          //This should be a Toast
          //Log this error
            alert('An unexpected error occured');
            console.log(console.error);
            
        }
      )
  }

}
