import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators  } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  form = new FormGroup({
    username: new FormControl('',{validators: [ 
      Validators.required,
      Validators.minLength(5),
      Validators.email, 
      Validators.maxLength(50),
      UsernameValidators.cannotContainSpace,
      
    ], asyncValidators:UsernameValidators.shouldBeUnique}),
    password:new FormControl('', Validators.required)
  });
  get username(){
    return this.form.get('username');
  }
  login(){
    this.form.setErrors({
      invalidLogin: true
    });
  }
}
