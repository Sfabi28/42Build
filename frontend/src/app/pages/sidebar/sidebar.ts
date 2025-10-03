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
  show: boolean = false;
  constructor() {
    if (window.innerWidth < 500) {
      this.show = false;
    }
  }
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

  toggle() { 
    this.show = !this.show;
    if (!this.show) {
      const sidebar = document.querySelector('.sidebar');
      sidebar?.classList.add('compressed');
      const list = document.querySelector('.list');
      list?.classList.add('compressed');
      const logo = document.querySelector('.logo');
      logo?.classList.add('compressed');
    } else {
      const sidebar = document.querySelector('.sidebar');
      sidebar?.classList.remove('compressed');
      const list = document.querySelector('.list');
      list?.classList.remove('compressed');
      const logo = document.querySelector('.logo');
      logo?.classList.remove('compressed');
    }
  }
}
