import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductManagement from "./Layout/ProductManagement";
import ListProduct from "./pages/ListProduct";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProuct";
import NotFound404 from "./pages/NotFound404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductManagement />}>
            <Route index element={<ListProduct />}></Route>
            <Route path="add-product" element={<AddProduct />} />
            <Route path="edit-product" element={<EditProduct />} />
            <Route path="*" element={<NotFound404 />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
