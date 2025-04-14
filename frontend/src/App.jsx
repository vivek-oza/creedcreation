import "./App.css";
import React, { useEffect } from "react";
import CreedCreationRoutes from "./lib/Routes";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
      <CreedCreationRoutes />
    
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </>
  );
}

export default App;
