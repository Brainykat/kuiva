import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //If you dont allow next| prev on same page you can use snapshot
    //this.route.snapshot.paramMap.get('id');
    //else use observable
    this.route.paramMap
      .subscribe(params => {
          //console.log(params);
          let id = params.get('id');
          console.log(id);
      });
  }

}
