import SkillBoxItem from "../components/SkillBoxItem";

const SkillsDev = () => {
  return (
    <section className="skills-dev section" id="skills-dev">
      <div className="skills-dev__inner container">
        <div className="title">
          <h2>Skills</h2>
          <p>Erworbene Fähigkeit in der Webentwicklung</p>
        </div>
        <SkillBoxItem
          skills={[
            {
              src: "../../img/webdesign.png",
              name: "Webdesign",
              description: `Website-Vorlagen erstellen und designen mit Figma.`,
            },
            {
              src: "../../img/landing-page.png",
              name: "Frontend",
              description: `Meine Kenntnisse in HTML, CSS, JavaScript und ReactJS haben mir ermöglicht, 
              zahlreiche statische Websites zu entwickeln.`,
            },
            {
              src: "../../img/backend-regular.png",
              name: "Backend",
              description: `Ich verfüge über Expertise in Node.js, MySQL, die es mir erlaubt,
              auch komplexe Webentwicklungsprojekte umzusetzen.`,
            },
            {
              src: "../../img/javascript-regular.png",
              name: "Programmierung",
              description: `Ich erweitere meine Fähigkeiten kontinuierlich und lerne aktuell C++, Java und SQL, um
              Anwendungen, Apps und Datenbanken zu entwickeln und kundenspezifische Software zu
              verbessern.`,
            },
            {
              src: "../../img/language.png",
              name: "Sprachen",
              description: `Neben Deutsch spreche ich fließend Russisch und verfüge über grundlegende
              Englischkenntnisse, was mir ermöglicht, international vernetzt zu agieren.`,
            },
            {
              src: "../../img/soft-skill.png",
              name: "Soft Skills",
              description: `Neben meinem technischen Know-how sind meine Kommunikationsfähigkeiten, Teamarbeit und
              die Fähigkeit, sowohl das große Ganze als auch Details im Blick zu behalten, von
              entscheidender Bedeutung.`,
            },
          ]}
        />
      </div>
    </section>
  );
};

export default SkillsDev;

{
  /* <div className="skills-dev__Box card">
            <div className="imgBx">
              <img src="" />
            </div>
            <p>
              <b>
                <i> : </i>
              </b>
              
              <br />
              <b>
                <i>: </i>
              </b>
              
              <br />
              <b>
                <i>: </i>
              </b>
              
              <br />
              <b>
                <i>: </i>
              </b>
              
              <br />
              <b>
                <i>: </i>
              </b>
              
            </p>
            <h4>
              Someone Famouse
              <br />
              <span>Website Designer</span>
            </h4>
          </div> */
}
