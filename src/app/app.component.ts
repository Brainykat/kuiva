import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kuiva';
  data = [
    {name:"Oti",isFav:true},
    {name:"Saba",isFav:true},
  {name:"Kip",isFav:false},
  {name:"Yusuf",isFav:true},
  {name:"Pombe",isFav:false},
  {name:"Waru",isFav:true}
]

}
