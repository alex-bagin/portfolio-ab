import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Courses from "./pages/Courses.jsx";
import Cv from "./pages/Cv/Cv.jsx";
import Hero from "./pages/Hero.jsx";
import Projects from "./pages/Projects.jsx";
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
      { path: "projects", element: <Projects /> },
      { path: "skills", element: <SkillsDev /> },
      { path: "cv", element: <Cv /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
