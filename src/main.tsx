import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header.tsx";
import { App } from "./App.tsx";
import { Footer } from "./components/Footer.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="grid h-screen grid-cols-[auto_minmax(0px,1250px)_auto] justify-center bg-bgColor">
        <div className="grid grid-cols-1 col-start-2 grid-rows-[auto_minmax(0px,_1fr)_auto] gap-8 p-8">
          <Header />
          <App />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);
