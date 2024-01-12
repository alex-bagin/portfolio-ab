import SkillBoxItem from "../components/SkillBoxItem";

const SkillsDev = () => {
  return (
    <section className="skills-dev section" id="skills-dev">
      <div className="skills-dev__inner container">
        <div className="title">
          <h2>Skills</h2>
          <p>Erworbene Fähigkeiten in der Webentwicklung</p>
        </div>
        <SkillBoxItem
          skills={[
            {
              src: "./icons/javascript-regular.png",
              name: "Programmierung",
              description: `Ich erweitere meine Fähigkeiten kontinuierlich und lerne aktuell TypeScript und SQL, um
              Anwendungen, Apps und Datenbanken zu entwickeln.`,
            },
            {
              src: "./icons/webdesign.png",
              name: "Webdesign",
              description: `Website-Vorlagen erstellen und designen mit Figma.`,
            },
            {
              src: "./icons/landing-page.png",
              name: "Frontend",
              description: `Meine Kenntnisse in HTML, CSS, JavaScript und ReactJS haben mir ermöglicht 
              statische Webseiten zu erstellen.`,
            },
            {
              src: "./icons/language.png",
              name: "Sprachen",
              description: `Neben Deutsch spreche ich fließend Russisch und verfüge über grundlegende
              Englischkenntnisse, was mir ermöglicht, international vernetzt zu agieren.`,
            },
            {
              src: "./icons/backend-regular.png",
              name: "Backend",
              description: `Ich verfüge über Expertise in Node.js, Express, MySQL, die es mir erlaubt 
              auch komplexe Webentwicklungsprojekte umzusetzen.`,
            },

            {
              src: "./icons/soft-skill.png",
              name: "Soft Skills",
              description: `Neben meinem technischen Know-how besitze ich auch gute Kommunikationsfähigkeiten 
              und bringe ein schnelles Auffassungsvermögen und Verständnis für Anforderungen und Lösungswünsche mit.`,
            },
          ]}
        />
      </div>
    </section>
  );
};

export default SkillsDev;
