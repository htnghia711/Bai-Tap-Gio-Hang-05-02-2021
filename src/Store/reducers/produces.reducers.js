import {
  GET_PRODUCE_FAILED,
  GET_PRODUCE_SUCCESS,
} from "../constants/product.const";

const inittialState = {
  productList: [],
};

const productReducer = (state = inittialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCE_SUCCESS: {
      state.productList = payload;
      return { ...state };
    }
    case GET_PRODUCE_FAILED: {
      state.error = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
export default productReducer;
