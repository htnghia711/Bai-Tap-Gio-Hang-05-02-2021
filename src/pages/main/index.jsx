import React, { Component } from "react";
import AppShopping from "../../components/AppShopping/AppShopping";
import { getProduct } from "../../services/product";
import { connect } from "react-redux";
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
       this.props.dispatch({
        
       })
      })
      .catch((err) => {});
  }
}

export default connect()(Home);
