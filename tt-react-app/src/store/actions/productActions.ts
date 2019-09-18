import * as types from "./actionTypes";
import Product from "../../interfaces/Product";
import * as productApi from "../../api/productApi";

export function getProductsSuccess(products: Product[]) {
  return { type: types.GET_PRODUCTS_SUCCESS, products };
}

export function getProducts() {
  return async function(dispatch: any) {
    const products = await productApi.getProducts();
    dispatch(getProductsSuccess(products));

    return true;
  };
}
