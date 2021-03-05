import React, { Component } from "react";
import AppShopping from "../../components/AppShopping/AppShopping";
import { getProduct } from "../../Store/product";

class Home extends Component {
  render() {
    return (
      <>
        <AppShopping />
      </>
    );
  }
  componentDidMount() {
    getProduct
      .getAxios()
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {});
  }
}

export default Home;
