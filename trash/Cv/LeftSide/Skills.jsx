const Skills = () => {
  const skills = [
    {
      title: "Hardware",
      name: "PC, Server, Raid-System (SAN)",
      styleTitle: "htext",
      styleContent: "text",
    },
    {
      title: "Software",
      name: "MS Windows Server, ERP-Navision, MS Office, Scribus, Figma",
      styleTitle: "htext",
      styleContent: "text",
    },
  ];
  return (
    <div className="contactInfo skills2">
      <h3 className="title1">Kompetenzen</h3>
      {skills.map((skill) => (
        <ul key={skill.title}>
          <li>
            <span className={skill.styleTitle}>{skill.title}</span>
          </li>
          <li>
            <span className={skill.styleContent}>{skill.name}</span>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Skills;
