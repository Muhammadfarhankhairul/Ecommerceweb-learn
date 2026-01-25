import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import ProductDetails from "./pages/ProductDetail";
import CardPage from "./pages/CardPage";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/card" element={<CardPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
