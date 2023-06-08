import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Array<any> = [];
  cart = {
    CartId: 0,
    CustId: 1,
    ProductId: null,
    Quantity: 0,
    AddedDate: null,
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  async fetchProducts() {
    try {
      const { data: products }: any = await this.productService.getProducts();

      console.log(this.products);
      this.products = products;
    } catch (error) {
      console.error(error);
    }
  }

  async addProductToCart(id: number) {
    try {
      const item = {
        ...this.cart,
        ProductId: id,
        AddedDate: new Date().toISOString(),
      };

      const { message }: any = await this.productService.addToCart(item);

      this.productService.newProductAddedInCartSubject.next(true);

      console.log(message);
      alert(message);
    } catch (error) {
      console.error(error);
    }
  }
}
