import React from "react";
import { Routes } from "./routes/AllRoutes";
import {Provider} from 'react-redux'
import "./index.css";
import store from "./redux/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <Provider store={store}>
      {" "}
      <ToastContainer/>
      <Routes />
    </Provider>
  );
};

export default App;
