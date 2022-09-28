import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecom',
  templateUrl: './ecom.component.html',
  styleUrls: ['./ecom.component.css'],
})
export class EcomComponent implements OnInit {
  products = [];

  constructor() {}

  ngOnInit(): void {}

  onProductAdded(data) {
    this.products.push({
      name: data.name,
      quantity: data.quantity,
      status: data.status,
    });
    console.log(this.products);
  }
}