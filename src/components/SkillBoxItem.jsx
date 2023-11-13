const SkillBoxItem = (props) => {
  const skills = props.skills;
  return (
    <div>
      <div className="skills-dev__content">
        {skills.map((skill) => (
          <div className="skills-dev__Box card" key={skill.name}>
            <div className="skills-dev__Box-wrapper">
              <div className="imgBx">
                <img src={skill.src} />
              </div>
              <h4 className="skills-dev__Box-h4"> {skill.name} </h4>
            </div>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBoxItem;
