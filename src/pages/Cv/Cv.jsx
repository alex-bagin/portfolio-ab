import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

const Cv = () => {
  return (
    <section className="cv adjust" id="cv">
      <div className="title">
        <h2>Lebenslauf</h2>
      </div>
      <div className="container">
        <LeftSide />
        <RightSide />
      </div>
    </section>
  );
};

export default Cv;
