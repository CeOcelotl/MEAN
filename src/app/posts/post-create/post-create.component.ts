import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


const materialGroup = [MatInputModule, MatCardModule, MatButtonModule];
@Component({
    selector: 'app-post-create',
    standalone: true,
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css'],
    imports: [CommonModule, FormsModule, materialGroup,]
})
export class PostCreateComponent {
  enteredValue = '';

  newPost = '';

  onAddPost() {
    this.newPost = this.enteredValue;
  }
}
