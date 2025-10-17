import React, { lazy } from "react";

const Home = lazy(() => import("../modules/home"));
const About = lazy(() => import("../modules/about"));
// const Services = lazy(() => import("../modules/services"));
// const Contact = lazy(() => import("../modules/contact"));

const AppRoutes = [
  { path: "/", element: <Home />, label: "Home" },
  { path: "/about", element: <About />, label: "About" },
  // { path: "/services", element: <Services />, label: "Services" },
  // { path: "/contact", element: <Contact />, label: "Contact" },
];

export default AppRoutes;
