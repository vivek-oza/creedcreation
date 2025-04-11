// App.js
import Layout from "@/components/CreedCreation/Layout";
import Home from "@/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function CreedCreationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Other routes */}
        </Route>
        {/* <Route path="/Contacts" element={<Contacts />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
