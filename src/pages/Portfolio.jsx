import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
  const baseSack = [
    { title: "HTML", src: "./icons/html.svg", alt: "HTML" },
    { title: "CSS", src: "./icons/css.svg", alt: "CSS" },
    { title: "JavaScript", src: "./icons/javascript.svg", alt: "JavaScript" },
    { title: "Figma", src: "./icons/figma.svg", alt: "Figma" },
    { title: "Gulp", src: "./icons/gulp.svg", alt: "Gulp" },
    { title: "Postcss", src: "./icons/postcss.svg", alt: "Postcss" },
    { title: "React-Router", src: "./icons/react-router.svg", alt: "React-Router" },
    { title: "React", src: "./icons/react.svg", alt: "React" },
    { title: "SCSS", src: "./icons/scss.svg", alt: "SCSS" },
    { title: "TypeScript", src: "./icons/typescript.svg", alt: "TypeScript" },
    { title: "Vite", src: "./icons/vite.svg", alt: "Vite" },
    { title: "WebPack", src: "./icons/webpack.svg", alt: "WebPack" },
    { title: "Axios", src: "./icons/axios.png", alt: "Axios" },
    { title: "MySql", src: "./icons/mysql.svg", alt: "MySql" },
    { title: "Nodemon", src: "./icons/nodemon.svg", alt: "Nodemon" },
    { title: "Express", src: "./icons/express.png", alt: "Express" },
    { title: "Sequelize", src: "./icons/sequelize.svg", alt: "Sequelize" },
  ];
  return (
    <section className="portfolio section" id="projects">
      <div className="portfolio__inner container">
        <div className="title">
          <h2>Portfolio</h2>
          <p>Meine letzten Projekte</p>
        </div>
        <div className="section__body">
          <div className="portfolio">
            <ul className="portfolio__list grid">
              <li className="portfolio__item grid__item">
                <PortfolioCard
                  img1={"./img/projects/liqui-planner/liqui-planner.jpeg"}
                  img2={"./img/projects/liqui-planner/UC-a0eedeb6-c4a7-46cc-82ea-2061733bc362.jpg"}
                  date={"November 2021"}
                  url={"https://alex-bagin.github.io/liqui-planner/"}
                  name={"Liqui-Planner"}
                  descript={`Dieses Projekt zielt darauf ab eine praktische und benutzerfreundliche Lösung für die
                              Verwaltung von Einnahmen, Ausgaben und Bilanzen darzustellen. Es ist eine großartige
                              Möglichkeit für Benutzer, ihren finanziellen Status im Auge zu behalten und fundierte
                              finanzielle Entscheidungen zu treffen. Durch die Verwendung von JavaScript und CSS wird
                              eine dynamische Benutzeroberfläche geschaffen, die das Erstellen, Bearbeiten und
                              Überwachen von Finanzdaten erleichtert.`}
                  stack={[
                    { title: "HTML", src: "./icons/html.svg", alt: "HTML" },
                    { title: "CSS", src: "./icons/css.svg", alt: "CSS" },
                    {
                      title: "JavaScript",
                      src: "./icons/javascript.svg",
                      alt: "JavaScript",
                    },
                  ]}
                />
              </li>
              <li className="portfolio__item grid__item">
                <PortfolioCard
                  img1={"./img/projects/to-do-list/to-do-list.png"}
                  img2={"./img/projects/to-do-list/UC-bc947081-abea-491c-b7f0-34a8c8cc8eb6.jpg"}
                  date={"März 2023"}
                  url={"https://alex-bagin.github.io/to-do-list/"}
                  name={"To-Do-List"}
                  descript={`Die To-Do-List-Anwendung bietet eine benutzerfreundliche Plattform zur Organisation von Aufgaben und deren Listen.
                  Benutzer können Tasks hinzufügen, bearbeiten und abhaken. 
                  Die Anwendung ermöglicht eine einfache Verwaltung und eine effizentere Abarbeitung und Koordination.`}
                  stack={[
                    { title: "HTML", src: "./icons/html.svg", alt: "HTML" },
                    { title: "CSS", src: "./icons/css.svg", alt: "CSS" },
                    {
                      title: "JavaScript",
                      src: "./icons/javascript.svg",
                      alt: "JavaScript",
                    },
                    { title: "MySql", src: "./icons/mysql.svg", alt: "MySql" },
                    { title: "Nodemon", src: "./icons/nodemon.svg", alt: "Nodemon" },
                    { title: "Express", src: "./icons/express.svg", alt: "Express" },
                    {
                      title: "Sequelize",
                      src: "./icons/sequelize.svg",
                      alt: "Sequelize",
                    },
                  ]}
                />
              </li>
              <li className="portfolio__item grid__item">
                <PortfolioCard
                  img1={"./img/projects/posts/posts.png"}
                  // img2={
                  //   "./img/projects/liqui-planner/UC-a0eedeb6-c4a7-46cc-82ea-2061733bc362.jpg"
                  // }
                  date={"Juni 2023"}
                  url={"https://alex-bagin.github.io/posts/"}
                  name={"Posts"}
                  descript={`Die App ermöglicht das Herunterladen von Posts mit Axios, 
                                die Anzeige und Sortierung dieser Posts sowie die Erstellung eigener Beiträge. 
                                Benutzer können Bilder und Videos ansehen. 
                                Dies schafft eine vielseitige Plattform für den Austausch von Inhalten.`}
                  stack={[
                    { title: "HTML", src: "./icons/html.svg", alt: "HTML" },
                    { title: "CSS", src: "./icons/css.svg", alt: "CSS" },
                    {
                      title: "JavaScript",
                      src: "./icons/javascript.svg",
                      alt: "JavaScript",
                    },
                    { title: "React", src: "./icons/react.svg", alt: "React" },
                    {
                      title: "React-Router",
                      src: "./icons/react-router.svg",
                      alt: "React-Router",
                    },
                    { title: "Axios", src: "./icons/axios.png", alt: "Axios" },
                    { title: "WebPack", src: "./icons/webpack.svg", alt: "WebPack" },
                  ]}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
