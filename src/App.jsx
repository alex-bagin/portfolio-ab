import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { ThemeContext} from "./context";
import Topbar from "./components/Topbar";

function App() {
  const [theme, setTheme] = useState(true);
  const [modal, setModal] = useState(true);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
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
          <Link to="home">
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
          </Link>
          
        </div>
      </MyModal>
      <div className="container">
        <div className="main">
          <Topbar/>
          <Outlet/>
        </div>
        </div>
    </ThemeContext.Provider>
  );
}

export default App;
