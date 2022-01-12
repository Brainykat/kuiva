import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kuiva';
  data = [
    {id:1, name:"Oti",isFav:true},
    {id:2, name:"Saba",isFav:true},
    {id:3, name:"Kip",isFav:false},
    {id:4, name:"Yusuf",isFav:true},
    {id:5, name:"Pombe",isFav:false},
    {id:6, name:"Waru",isFav:true}
]

}
