const Portfolio = () => {
  return (
    <section className="portfolio section" id="projects">
      <div className="portfolio__inner container">
        <div className="title">
          <h2>Meine letzte Projekte</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi veritatis perferendis
            consectetur
          </p>
          <div className="portfolio__content">
            <div className="portfolio__content--workBx card">
              <div className="portfolio__content--imgBx">
                <img src="./img/projekt1.jpg" />
              </div>
              <div className="portfolio__content--textBx card">
                <h3>Project 01</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
