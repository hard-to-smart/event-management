import React from "react";
import { Routes } from "./routes/AllRoutes";
import {Provider} from 'react-redux'
import "./index.css";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      {" "}
      <Routes />
    </Provider>
  );
};

export default App;
