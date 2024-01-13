import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";
import About from "./pages/About.jsx";
import Courses from "./pages/Courses.jsx";
import Hero from "./pages/Hero.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Skills from "./pages/Skills.jsx";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/portfolio-ab",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, path: "portfolio-ab/hero", element: <Hero /> },
      { path: "portfolio-ab/about", element: <About /> },
      { path: "portfolio-ab/courses", element: <Courses /> },
      { path: "portfolio-ab/portfolio", element: <Portfolio /> },
      { path: "portfolio-ab/skills", element: <Skills /> },
      { path: "portfolio-ab/footer", element: <Footer /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
