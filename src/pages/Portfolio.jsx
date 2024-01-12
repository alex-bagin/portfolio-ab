import PortfolioCard from "../components/PortfolioCard";
import { projects } from "../../config/projects";

const Portfolio = () => {
  return (
    <section className="portfolio section " id="projects">
      <div className="portfolio__inner container">
        <div className="title">
          <h2>Portfolio</h2>
          <p>Meine letzten Projekte</p>
        </div>
        <div className="section__body">
          <div className="portfolio">
            <ul className="portfolio__list grid ">
              {projects.map((project) => (
                <li className="portfolio__item grid__item " key={project.name}>
                  <PortfolioCard
                    name={project.name}
                    date={project.date}
                    url={project.url}
                    img1={project.images.img1}
                    img2={project.images.img2}
                    description={project.description}
                    stack={project.stack}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
