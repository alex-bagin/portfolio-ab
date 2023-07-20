import About from "./About";
import Experience from "./Experience";
import Interest from "./Interest";
import SkillsWeb from "./SkillsWeb";

const RightSide = () => {
  return (
    <div className="rightSide">
      <About />
      <Experience />
      <SkillsWeb />
      <Interest />
    </div>
  );
};

export default RightSide;
