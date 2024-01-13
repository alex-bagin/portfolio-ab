import { skills } from "../../config";

const SkillBoxItem = () => {
  return (
    <div>
      <div className="skills-dev__content">
        {skills.map((skill) => (
          <div className="skills-dev__Box card" key={skill.name}>
            <div className="skills-dev__Box-wrapper">
              <div className="imgBox">
                <img src={skill.src} />
              </div>
              <h5 className="skills-dev__Box-h4"> {skill.name} </h5>
            </div>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBoxItem;
