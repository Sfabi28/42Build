import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  show: boolean = false;
  constructor(private router: Router) {
    if (window.innerWidth < 500) {
      this.show = false;
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
