import axios from "axios";

class GetProduct {
  getAxios(data) {
    return axios({
      method: "GET",
      url: "https://6038ad714e3a9b0017e93ac7.mockapi.io//Bai-Tap-Gio-Hang",
      data,
    });
  }
}

export default GetProduct;
