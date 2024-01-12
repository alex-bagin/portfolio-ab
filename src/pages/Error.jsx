import { Link } from "react-router-dom";
import MyButton from "../components/UI/button/MyButton";

const Error = () => {
  return (
    <section className="error" id="error">
      <div className="error__inner container">
        <img src="./Scripts/400-error-bad-request-animate.svg" />
        <Link to="/portfolio-ab/">
          <MyButton
            buttonStyle={"btn--outline"}
            buttonSize={"btn--small"}
            buttonVisibility={"visible"}
          >
            zurück zum Portfolio
          </MyButton>
        </Link>
      </div>
    </section>
  );
};

export default Error;
