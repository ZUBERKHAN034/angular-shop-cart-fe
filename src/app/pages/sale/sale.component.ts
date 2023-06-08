import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css'],
})
export class SaleComponent implements OnInit {
  cartProducts: Array<any> = [];
  subTotal: number = 0;
  sale: any = {
    SaleId: 0,
    CustId: null,
    SaleDate: null,
    TotalInvoiceAmount: null,
    Discount: 0,
    PaymentNaration: 'abc',
    DeliveryAddress1: 'abc xyz 123',
    DeliveryAddress2: 'abc',
    DeliveryCity: 'abc',
    DeliveryPinCode: '123456',
    DeliveryLandMark: 'xyz',
  };

  constructor(private productService: ProductService) {}

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

  async removeProductFromCartById(id: number) {
    try {
      const { message }: any =
        await this.productService.deleteProductFromCartById(id);

      this.fetchCartProducts();
      this.productService.newProductAddedInCartSubject.next(true);

      console.log(message);
      alert(message);
    } catch (error) {
      console.error(error);
    }
  }

  async makeSale() {
    try {
      const newSale = {
        ...this.sale,
        CustId: 1,
        TotalInvoiceAmount: this.subTotal,
        SaleDate: new Date().toISOString(),
      };

      const { message }: any = await this.productService.addNewSale(newSale);

      this.fetchCartProducts();
      this.productService.newProductAddedInCartSubject.next(true);

      console.log(message);
      alert(message);
    } catch (error) {
      console.error(error);
    }
  }
}
