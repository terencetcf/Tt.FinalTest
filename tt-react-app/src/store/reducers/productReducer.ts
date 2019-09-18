import * as types from "../actions/actionTypes";
import initialState from "../initialState";

export default function productReducer(
  state: any = initialState.products,
  action: any
) {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return action.products;

    case types.GET_PRODUCTS_SUCCESS:
      return action.products;

    default:
      return state;
  }
}
