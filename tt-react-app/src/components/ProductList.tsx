import React, { useEffect } from "react";
import { connect } from "react-redux";
import AppState from "../interfaces/AppState";
import { getProducts } from "../store/actions/productActions";

interface IProps extends AppState {
  getProducts(): any;
}

const ProductList: React.FC<IProps> = ({ products, getProducts }) => {
  useEffect(() => {
    if (products.length < 1) {
      getProducts();
    }
  }, [products]);

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(price);
  };

  return (
    <table className="table table-dark table-hover table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>{formatPrice(product.price)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = {
  getProducts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
