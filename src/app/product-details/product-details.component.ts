import { Component } from '@angular/core';
import Product from '../product-page/product';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: Product | undefined;

  constructor(public route: ActivatedRoute, _productsService: ProductsService) {
    const productid = Number(this.route.snapshot.paramMap.get('id'))
    _productsService.getProducts().subscribe({
      next: (res) => {
        this.product = res.find(pr => pr.id === productid)
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log("completed");
      }
    })
  }
  // this.route.queryParams.subscribe(params => {
  //   this.productid
  //   params['id']
  // });

}
