import { Component } from '@angular/core';
import { HomeList } from '../../lists/home-list/home-list';

@Component({
  selector: 'app-home',
  imports: [HomeList],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  devices = [
    { id: 1, name: 'Device 1', icon: 'def.png', ph_level: 7, nutrient_level: 30},
    { id: 2, name: 'Device 2', icon: 'def.png', ph_level: 6, nutrient_level: 10},
    { id: 3, name: 'Device 3', icon: 'def.png', ph_level: 10, nutrient_level: 20},
    { id: 4, name: 'Add Device', icon: 'def.png'},
  ];

}
