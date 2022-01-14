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

  log(x:any){
    console.log(x);
  }
  submit(f:any){
    console.log(f);
    console.log("form");
  }
}
