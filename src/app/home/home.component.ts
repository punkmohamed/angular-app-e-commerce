import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SliderComponent } from "../slider/slider.component";

import { ProductsService } from './../products.service';
import Product from '../product-page/product';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: Product[] = []

  constructor(public router: Router, _productsService: ProductsService) {
    _productsService.getProducts().subscribe({
      next: (res) => {
        this.products = res.slice(0, 4);

      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log("completed");
      },
    });
  }
  viewAll() {
    this.router.navigate(['/products'])
  }
}
