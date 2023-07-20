const SkillsWeb = () => {
  const skills = [
    { name: "HTML", styleClasse: "box", percentClasse: "percent", percent: "80%" },
    { name: "CSS", styleClasse: "box", percentClasse: "percent", percent: "70%" },
    { name: "JAVASCRIPT", styleClasse: "box", percentClasse: "percent", percent: "50%" },
    { name: "NODEJS", styleClasse: "box", percentClasse: "percent", percent: "30%" },
    { name: "REACTJS", styleClasse: "box", percentClasse: "percent", percent: "35%" },
    { name: "EXPRESSJS", styleClasse: "box", percentClasse: "percent", percent: "30%" },
    { name: "GIT", styleClasse: "box", percentClasse: "percent", percent: "55%" },
    {
      name: "BATCH, UEFI-SHELL - SKRIPTING",
      percentClasse: "percent",
      styleClasse: "box",
      percent: "70%",
    },
  ];
  return (
    <div className="about skills">
      <h2 className="title2">Fachliche Kompetenzen</h2>
      {skills.map((skill) => (
        <div key={skill.name} className={skill.styleClasse}>
          <h4>{skill.name}</h4>
          <div className={skill.percentClasse}>
            <div style={{ width: skill.percent }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsWeb;
