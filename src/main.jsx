import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Projects from "./pages/Projects.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Cv from "./pages/Cv/Cv.jsx";
import Contact from "./pages/Contact.jsx";
import Copyright from "./components/Copyright.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>ERROR: App</h1>,
    children: [
      { index: true, element: <Index /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "projects", element: <Projects /> },
      { path: "testimonials", element: <Testimonials /> },
      { path: "cv", element: <Cv /> },
      { path: "contact", element: <Contact /> },
      { path: "copyright", element: <Copyright /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
