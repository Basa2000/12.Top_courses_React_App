import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// C:\Users\basavaraj\OneDrive\Desktop\Full Stack Development\11. React Basic Projects\2.top-course\node_modules\react-toastify\dist\ReactToastify.css

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
    <ToastContainer/>
  </div>
    
  
);
