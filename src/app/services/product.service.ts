import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import constants from '../common/constants';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public newProductAddedInCartSubject = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  async getProducts(): Promise<Observable<Array<any>>> {
    const response = await this.http
      .get(
        `${constants.ENUMS.BE_BASE_URL}${constants.ENDPOINTS.GET_ALL_PRODUCTS}`
      )
      .toPromise();

    return response as Observable<Array<any>>;
  }

  async addToCart(params: any): Promise<Observable<any>> {
    const response = await this.http
      .post(
        `${constants.ENUMS.BE_BASE_URL}${constants.ENDPOINTS.ADD_TO_CART}`,
        params
      )
      .toPromise();

    return response as Observable<any>;
  }

  async getCartProductByCustomerId(
    id: number
  ): Promise<Observable<Array<any>>> {
    const response = await this.http
      .get(
        `${constants.ENUMS.BE_BASE_URL}${constants.ENDPOINTS.GET_PRODUCTS_BY_CUSTOMER_ID}${id}`
      )
      .toPromise();

    return response as Observable<Array<any>>;
  }

  async deleteProductFromCartById(id: number): Promise<Observable<any>> {
    const response = await this.http
      .get(
        `${constants.ENUMS.BE_BASE_URL}${constants.ENDPOINTS.DELETE_PRODUCT_FROM_CART_BY_ID}${id}`
      )
      .toPromise();

    return response as Observable<any>;
  }

  async addNewSale(params: any): Promise<Observable<any>> {
    const response = await this.http
      .post(
        `${constants.ENUMS.BE_BASE_URL}${constants.ENDPOINTS.ADD_NEW_SALE}`,
        params
      )
      .toPromise();

    return response as Observable<any>;
  }
}
