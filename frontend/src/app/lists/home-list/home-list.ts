import { Component, Inject, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Device } from '../../model/device';

@Component({
  selector: 'app-home-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home-list.html',
  styleUrl: './home-list.css'
})
export class HomeList {
  @Input() element: Device[] = [];
  
  constructor() {
  }

  trackById(index: number, item: Device) {
    return item.id; // o index se non hai un id stabile
  }
}
