import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, PostCreateComponent, HeaderComponent]
})
export class AppComponent {
  title = 'mean-course';
}
