import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import Product from '../product-page/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product
  constructor(public router: Router) { }
  goToProductDetails(productid: any) {
    this.router.navigate(['/productDetails', productid])
  }
}
