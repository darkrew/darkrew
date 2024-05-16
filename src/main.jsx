import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Team from "./components/Team/Team.jsx";
import ContactUs from "./components/Contact/ContactUs.jsx";
import OurWork from "./components/OurWork/OurWork.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<App />} />
      <Route path="/team" element={<Team />} />
      <Route path="/ourwork" element={<OurWork />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
