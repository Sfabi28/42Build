import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, FormsModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  onclick(c: string) {
    console.log("click");
    switch (c) {
      case 'profile':
        window.location.href = '/profile';
        break;
      case 'device':
        window.location.href = '/device';
        break;
      case 'plants':
        window.location.href = '/plants';
        break;
      case 'shop':
        window.location.href = '/shop';
        break;
      case 'settings':
        window.location.href = '/settings';
        break;
      default:
        window.location.href = '/';
    }
  }


}
