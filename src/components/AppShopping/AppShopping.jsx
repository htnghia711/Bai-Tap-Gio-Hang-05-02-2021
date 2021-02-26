import React, { Component } from "react";
import ProductList from "./ProductLict/ProductList";
import ProductSelected from "./ProductLict/ProductSelected";

class AppShopping extends Component {
  render() {
    return (
      <>
        <section className="container">
          <h3 className="title text-center">Bài tập giỏ hàng</h3>
          <div className="container text-center my-2">
            <button
              className="btn btn-danger "
              data-toggle="modal"
              data-target="#modelId"
            >
              Giỏ hàng (0)
            </button>
          </div>
          <ProductList />
          <ProductSelected />
        </section>
      </>
    );
  }
}
export default AppShopping;
