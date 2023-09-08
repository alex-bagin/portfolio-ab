import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import "./index.css";

const Cv = () => {
  return (
    <section className="cv section" id="cv">
      <div className="title">
        <h2>Lebenslauf</h2>
      </div>
      <div className="cv__inner container">
        <div className="cv__container">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </section>
  );
};

export default Cv;
