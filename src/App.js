import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/popper.js/dist/popper.min.js";
import Home from "./pages/main/index";
import { Provider } from "react-redux";
import store from "./redux";
function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
