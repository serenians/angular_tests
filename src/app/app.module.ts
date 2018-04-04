import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostComponent } from './component/post/post.component';
import { HomeComponent } from './component/home/home.component';

var routeNode : Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
   path: 'posts',
   component: PostComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeNode)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
