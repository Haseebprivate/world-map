import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";

import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";

import AppLayout from "./pages/AppLayout";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="product" element={<Product />} />
          <Route path="/" element={<Homepage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="app" element={<AppLayout />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
