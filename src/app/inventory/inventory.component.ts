import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  sodaList = [
    {name: 'Coke', price: 1.50, stock: 5, img : ''},
    {name: 'Sprite', price: 1.50, stock: 5, img : ''},
    {name: 'Ice Tea', price: 2.00, stock: 5, img : ''},
    {name: 'Pepsi', price: 1.50, stock: 5, img : ''},
    {name: 'Diet Coke', price: 1.50, stock: 5, img : ''},
    {name: 'Fanta', price: 1.50, stock: 5, img : ''},
    {name: 'Lemonade', price: 1.50, stock: 5, img : ''},
    {name: 'Root Beer', price: 1.50, stock: 5, img : ''},
    {name: 'Ginger Ale', price: 1.50, stock: 5, img : ''},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
