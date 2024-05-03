import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Components/Header/Header.jsx";
import Body from "./Components/Body/bodyPart.jsx";
import Footer from "./Components/Footer/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Body />
    <Footer />
  </React.StrictMode>
);
