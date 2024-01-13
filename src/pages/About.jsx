import { myImaginations } from "../../config";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__inner container">
        <div className="title">
          <h2>Über mich</h2>
        </div>
        <div className="content card">
          <div className="textBox">
            {myImaginations.map((imagination) => (
              <div className="textBox--item" key={imagination.title}>
                <b>
                  <p className="textBox__title">{imagination.title}</p>
                </b>
                <p>{imagination.description}</p>
                <br />
              </div>
            ))}
          </div>
          <div className="imgBox">
            <img src="./img/about_AB.jpg" alt="Alex Bagin" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
