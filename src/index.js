import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from 'react-redux'
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Provider store={store}>
        <ToastContainer theme="colored" />
            <App />
        </Provider>
    </React.StrictMode>
)