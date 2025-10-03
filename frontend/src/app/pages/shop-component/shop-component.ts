import { Component } from '@angular/core';
import { HomeList } from '../../lists/home-list/home-list';

@Component({
  selector: 'app-shop-component',
  imports: [HomeList],
  templateUrl: './shop-component.html',
  styleUrl: './shop-component.css'
})
export class ShopComponent {
  devices = [
    {name:'vaso', price: '$$$'},
    {name:'tower segment', price: '$$'},
    {name:'nutrients', price: '$'},
    {name:'net', price: '$$'},
  ];
}
