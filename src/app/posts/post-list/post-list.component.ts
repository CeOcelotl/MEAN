import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

const materialGroup = [MatExpansionModule];

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, materialGroup],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  // posts = [
  //   {title:"First Post", content:"This is the first post's content"},
  //   {title:"Second Post", content:"This is the Second post's content"},
  //   {title:"Third Post", content:"This is the Third post's content"}
  // ]
  posts = [];
}
