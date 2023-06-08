import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cartProducts: Array<any> = [];
  subTotal: number = 0;

  constructor(private productService: ProductService, private router: Router) {
    this.productService.newProductAddedInCartSubject.subscribe((_response) => {
      this.fetchCartProducts();
    });
  }

  ngOnInit(): void {
    this.fetchCartProducts();
  }

  async fetchCartProducts() {
    try {
      this.subTotal = 0;
      const { data: cartProducts }: any =
        await this.productService.getCartProductByCustomerId(1);

      console.log(this.cartProducts);
      this.cartProducts = cartProducts;

      this.cartProducts.forEach((item) => {
        this.subTotal += item.productPrice;
      });
    } catch (error) {
      console.error(error);
    }
  }

  redirectToSale() {
    this.router.navigateByUrl('sale');
  }
}
