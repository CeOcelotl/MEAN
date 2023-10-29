import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { Post } from './posts/post.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
  ],
})
export class AppComponent {

  storedPosts: Post[] = [];

  onPostAdded(post:Post) {
    this.storedPosts.push(post);
  }
}
