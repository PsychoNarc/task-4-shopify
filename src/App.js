import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Blog } from "./components/Pages/Blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShippingReturn } from "./components/Pages/ShippingReturn";
import { ContactForm } from "./components/Pages/ContactForm";
import { Catalog } from "./components/Catalog/Catalog";
import { ProductDetails } from "./components/Pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blog/:id" exact element={<Blog />} />
          <Route path='/pages/shipping-returns' exact element={<ShippingReturn />} />
          <Route path='/pages/contact' exact element={<ContactForm />} />
          <Route path='/catalog' exact element={<Catalog />} />
          <Route path='/product/:productId' exact element={<ProductDetails />} />
          <Route />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
