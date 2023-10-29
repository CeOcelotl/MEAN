import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialGroup = [MatToolbarModule];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, materialGroup],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
