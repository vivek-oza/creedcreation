"use client";
// components/Layout.js
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import CustomCursor from "../ui/CustomCursor";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-800 overflow-x-hidden">
      <CustomCursor />
      <main className="flex-1 w-full">
        <Navbar />
        <Outlet /> {/* This is where child routes will render */}
      </main>
    </div>
  );
};

export default Layout;
