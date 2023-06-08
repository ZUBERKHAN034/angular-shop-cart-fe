const constants = {
  ENUMS: {
    BE_BASE_URL: 'http://onlinetestapi.gerasim.in/api/Ecomm',
  },
  ENDPOINTS: {
    GET_ALL_PRODUCTS: '/getAllProducts',
    ADD_TO_CART: '/addToCart',
    GET_PRODUCTS_BY_CUSTOMER_ID: '/GetCartProductsByCustomerId?id=',
    DELETE_PRODUCT_FROM_CART_BY_ID: '/DeleteProductFromCartById?id=',
    ADD_NEW_SALE: '/AddNewSale',
  },
} as const;

export default constants;
