import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//import { FormGroup,FormControl } from '@angular/forms';


import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule //FormControl, FormGroup
    //Validators, FormBuilder,FormControl
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
