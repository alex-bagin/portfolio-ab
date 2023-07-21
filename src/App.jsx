import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import MyModal from "./components/UI/MyModal/MyModal";
import Navbar from "./components/UI/Navbar/Navbar";
import MyButton from "./components/UI/button/MyButton";
import { DarkContext } from "./context";
import Topbar from "./components/Topbar";
import Copyright from "./components/Copyright";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import Cv from "./pages/Cv/Cv";
import Contact from "./pages/Contact";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [modal, setModal] = useState(true);

  useEffect(() => {
    if (document.body.classList.contains("dark")) {
      setIsDark(true);
    }
  }, [isDark]);

  return (
    <DarkContext.Provider
      value={{
        isDark,
        setIsDark,
      }}
    >
      <MyModal visible={modal} setVisible={setModal}>
        <h1 style={{ color: "white" }}>Herzlich willkommen in meinem Portfolio!</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginTop: 30,
          }}
        >
          <MyButton
            style={{
              margin: "0px 15px",
              color: "white",
              fontSize: "1em",
            }}
            onClick={() => setModal(false)}
          >
            Portfolio anschauen
          </MyButton>
        </div>
      </MyModal>
      <div className="container">
        <Navbar />
        <div className="main">
          <Topbar />
          <Home />
          <About />
          <Services />
          <Projects />
          <Testimonials />
          <Cv />
          <Contact />
          <Copyright />
        </div>
      </div>
    </DarkContext.Provider>
  );
}

export default App;
