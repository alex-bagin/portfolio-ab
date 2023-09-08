import { Link } from "react-router-dom";
import Fancybox from "../components/Fancybox";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="projects">
      <div className="portfolio__inner container">
        <div className="title">
          <h2>Portfolio</h2>
          <p>Hier sind meine letzte Projekte</p>
        </div>
        <div className="section__body">
          <div className="portfolio">
            <ul className="portfolio__list grid">
              <li className="portfolio__item grid__item">
                <article className="portfolio-card card card--hoverable">
                  <Fancybox
                    options={{
                      Carousel: {
                        infinite: false,
                      },
                      Thumbs: {
                        type: "classic",
                      },
                    }}
                  >
                    <a
                      className="portfolio-card__image-wrapper portfolio-card__image-wrapper--border"
                      data-fancybox="gallery"
                      href="../../img/projects/liqui-planner.jpeg"
                      title="Open the image in full size"
                    >
                      <img
                        className="portfolio-card__image"
                        src="thumbnail../../img/projects/liqui-planner.jpeg"
                        alt="Projekt Liqui-Planner"
                        width="350"
                        loading="lazy"
                      />
                    </a>
                    <a
                      data-fancybox="gallery"
                      href="../../img/projects/liqui-planner/UC-a0eedeb6-c4a7-46cc-82ea-2061733bc362.jpg"
                      title="Open the image in full size"
                    ></a>
                  </Fancybox>

                  <div className="portfolio-card__body">
                    <time className="portfolio-card__date" dateTime="2022-08">
                      {" "}
                      November 2021{" "}
                    </time>
                    <h3 className="portfolio-card__title">
                      <Link
                        className="portfolio-card__link"
                        to="https://google.de"
                        target="_blank"
                        title="Open the website in a new tab"
                      >
                        Liqui-Planner
                      </Link>
                    </h3>
                    <div className="portfolio-card__description">
                      <p>
                        Dieses Projekt zielt darauf ab, eine praktische und benutzerfreundliche
                        Lösung für die Verwaltung von Einnahmen, Ausgaben und Bilanzen zu bieten. Es
                        ist eine großartige Möglichkeit für Benutzer, ihre finanzielle Gesundheit im
                        Auge zu behalten und fundierte finanzielle Entscheidungen zutreffen. Durch
                        die Verwendung von JavaScript und CSS wird eine dynamische
                        Benutzeroberfläche geschaffen, die das Erstellen, Bearbeiten und Überwachen
                        von Finanzdaten erleichtert.
                      </p>
                    </div>
                    <div className="stack">
                      <ul className="stack__list flow">
                        <li className="stack__item ">
                          <img
                            className="stack__image"
                            src="./icons/html.svg"
                            alt="HTML"
                            title="HTML"
                            width="36"
                            height="36"
                            loading="lazy"
                          />
                        </li>
                        <li className="stack__item">
                          <img
                            className="stack__image"
                            src="./icons/css.svg"
                            alt="CSS"
                            title="CSS"
                            width="36"
                            height="36"
                            loading="lazy"
                          />
                        </li>
                        <li className="stack__item">
                          <img
                            className="stack__image"
                            src="./icons/javascript.svg"
                            alt="JavaScript"
                            title="JavaScript"
                            width="36"
                            height="36"
                            loading="lazy"
                          />
                        </li>
                        {/* <li className="stack__item">
                            <img
                              className="stack__image"
                              src="./icons/vite.svg"
                              alt="Vite"
                              title="Vite"
                              width="36"
                              height="36"
                              loading="lazy"
                            />
                          </li>
                          <li className="stack__item">
                            <img
                              className="stack__image"
                              src="./icons/typescript.svg"
                              alt="TypeScript"
                              title="TypeScript"
                              width="36"
                              height="36"
                              loading="lazy"
                            />
                          </li>
                          <li className="stack__item">
                            <img
                              className="stack__image"
                              src="./icons/react.svg"
                              alt="React"
                              title="React"
                              width="36"
                              height="36"
                              loading="lazy"
                            />
                          </li>
                          <li className="stack__item">
                            <img
                              className="stack__image"
                              src="./icons/react-router.svg"
                              alt="React Router"
                              title="React Router"
                              width="36"
                              height="36"
                              loading="lazy"
                            />
                          </li>
                          <li className="stack__item">
                            <img
                              className="stack__image"
                              src="./icons/postcss.svg"
                              alt="PostCSS"
                              title="PostCSS"
                              width="36"
                              height="36"
                              loading="lazy"
                            />
                          </li> */}
                      </ul>
                    </div>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

{
  /* <div className="portfolio__content">
  <div className="portfolio__content--workBx">
    <div className="portfolio__content--imgBx">
      <img src="./img/projekt1.jpg" />
    </div>
    <div className="portfolio__content--textBx">
      <h3>Project 01</h3>
    </div>
  </div>
</div> */
}
