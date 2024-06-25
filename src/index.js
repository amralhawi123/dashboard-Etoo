import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; 
import './i18n' // استيراد ملف التكوين
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom"; 
import { ProSidebarProvider } from "react-pro-sidebar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ProSidebarProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ProSidebarProvider>
  </Provider>
);

