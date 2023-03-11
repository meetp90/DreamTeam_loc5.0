import Home from "./pages/Home";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import RoleAdmin from "./pages/RoleAdmin";

function App() {
  return (
    <h1>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/roleAdmin" element={<RoleAdmin />} />
          {/* <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} /> */}
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </h1>
  );
}

export default App;
