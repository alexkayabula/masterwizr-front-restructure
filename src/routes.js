import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import DefaultLayout from "./components/Layout";

// Route Views
import Home from "./components/pages/Home";

export default [
  {
    path: "/",
    layout: DefaultLayout,
    component: Home,
  }
];
