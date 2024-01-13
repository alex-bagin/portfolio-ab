import SkillBoxItem from "../components/SkillBoxItem";
import { skills } from "../../config";

const Skills = () => {
  return (
    <section className="skills-dev section" id="skills-dev">
      <div className="skills-dev__inner container">
        <div className="title">
          <h2>Skills</h2>
          <p>Meine Kenntnisse und Fähigkeiten in der Webentwicklung</p>
        </div>
        <SkillBoxItem skills={skills} />
      </div>
    </section>
  );
};

export default Skills;
