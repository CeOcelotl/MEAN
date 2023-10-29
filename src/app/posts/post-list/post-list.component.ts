import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Post } from '../post.interface';

const materialGroup = [MatExpansionModule];

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [materialGroup],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  @Input() posts: Post[] = [];
}
