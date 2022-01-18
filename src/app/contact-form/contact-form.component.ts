import { Component, OnInit } from '@angular/core';
import { FormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contactMethods=[
    {id:1,name:"Phone"},
    {id:2,name:"Email"},
    {id:3,name:"Smoke"},
    {id:4,name:"Letter"}
  ];
  log(x:any){
    console.log(x);
  }
  submit(f:any){
    console.log(f);
    console.log("form");
  }
}
