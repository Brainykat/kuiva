import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:any[] | undefined;
  private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { 
    
  }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(
      response => {
          console.log("data",response);
      },
      error => {

      }
    )
  }

}
