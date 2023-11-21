import { Component, EventEmitter, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Post } from '../post.interface';

const materialGroup = [MatInputModule, MatCardModule, MatButtonModule,MatFormFieldModule];
@Component({
  selector: 'app-post-create',
  standalone: true,
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
  imports: [FormsModule, NgIf, materialGroup],
})
export class PostCreateComponent {

  enteredContent = '';
  enteredTitle = '';

  @Output() postCreated = new EventEmitter<Post>();

  onAddPost(form: NgForm) {
    if(form.invalid){
      return;
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content,
    };
    this.postCreated.emit(post);
  }
}
