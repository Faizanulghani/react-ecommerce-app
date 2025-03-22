import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "swiper/css";
import "swiper/css/navigation";
import Footer from "./components/Footer";
import Annoucment from "./components/Annoucment";
import { Outlet } from "react-router";
import { Provider } from "react-redux";
import store from "./reducer/store";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Annoucment />
      <Outlet />
      <Footer />
    </Provider>
  );
};

export default App;
