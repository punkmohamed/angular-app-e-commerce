import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import Product from './product';
import { ProductComponent } from "../product/product.component";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductComponent, FormsModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  products: Product[] = []
  filterProduct: Product[] = []
  categoryProduct: Product[] = []
  productNow = 4
  currentProduct = 1
  searchTerm = ''
  hideButton: boolean = false
  uniqueCategories: string[] = [];
  constructor(public router: Router, public _productsService: ProductsService) {
    this.getMoreProduct()
    this.getCategory()

  }
  getCategory() {
    this.productNow = 100
    this.uniqueCategories = [...new Set(this.categoryProduct.map(product => product.category))];
  }
  getMoreProduct() {
    this._productsService.getProducts().subscribe({
      next: (res) => {
        this.categoryProduct = res;
        this.filterProduct = res.filter(product => product.category === 'jewelery');
        this.products = res.slice(0, this.productNow * this.currentProduct);
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log("completed");
      },
    });
  }
  filterProductsByName() {
    if (this.searchTerm) {
      this.products = this.products.filter(pro => pro.title.toLowerCase().includes(this.searchTerm.toLowerCase()))
      this.currentProduct = 1000
    } else {
      this.getMoreProduct()
      this.currentProduct = 1
    }
  }
  goToProductDetails(productid: any) {
    this.router.navigate(['/productDetails', productid])
  }
  moreProduct() {
    this.currentProduct++
    this.getMoreProduct()
  }
  getProductBycategory(data: any) {
    this.currentProduct = 1000
    this.products = this.categoryProduct.filter(pro => pro.category === data)
  }
}
