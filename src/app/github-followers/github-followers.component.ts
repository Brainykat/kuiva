import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.scss']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService
    ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(qparams =>{
      let page = qparams.get('page');
      let order = qparams.get('order')
      console.log(page + ' ==> '+ order)
    });

    this.service.getAll().subscribe(data=>this.followers=data as any[]);
  }

}
