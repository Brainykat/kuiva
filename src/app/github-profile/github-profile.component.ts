import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    //If you dont allow next| prev on same page you can use snapshot
    //this.route.snapshot.paramMap.get('id');
    //else use observable
    this.route.paramMap
      .subscribe(params => {
          //console.log(params);
          let id = params.get('id');
          let username = params.get('username');
          console.log(id + " => " + username);
      });
  }
  onSubmit(){
    this.router.navigate(['/followers']
    );
  }
}
