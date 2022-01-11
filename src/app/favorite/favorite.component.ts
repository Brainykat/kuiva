import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  btnText:string="";
  @Input('is-favorite') isFavorite:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    this.btnText = this.isFavorite ? "True":"false";
  }
  onClick(){
    this.isFavorite=!this.isFavorite;
    this.btnText = this.isFavorite ? "True":"false";
  }
}
