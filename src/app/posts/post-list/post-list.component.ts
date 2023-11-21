import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Post } from '../post.interface';
import { NgFor, NgIf } from '@angular/common';

const materialGroup = [MatExpansionModule];

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [materialGroup, NgIf, NgFor],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {

  @Input() posts: Post[] = [];
}
