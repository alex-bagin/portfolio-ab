import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Courses from "./pages/Courses.jsx";
import Hero from "./pages/Hero.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import SkillsDev from "./pages/SkillsDev.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>ERROR: App</h1>,
    children: [
      { index: true, path: "hero", element: <Hero /> },
      { path: "about", element: <About /> },
      { path: "courses", element: <Courses /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "skills", element: <SkillsDev /> },
      { path: "footer", element: <Footer /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
