import { PostService } from './posts/post.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http'



import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseComponent,
    PostsComponent,
    GithubFollowersComponent,
    HomeComponent,
    NavbarComponent,
    GithubProfileComponent,
    NotFoundComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule, 
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',component: HomeComponent
      },
      {
        path:'followers/:id/:username',component: GithubProfileComponent
      },
      {
        path:'followers',component: GithubFollowersComponent
      },
      {
        path:'posts',component: PostsComponent
      },
      {
        path:'**',component: NotFoundComponent
      },
    ])
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
