import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Largemonsters from "./pages/largemonsters";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/App" element={<App />} />
      <Route path="/largemonsters" element={<Largemonsters />} />
    </Routes>
  </BrowserRouter>
);
