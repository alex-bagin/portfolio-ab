import { Link } from "react-router-dom";
import MyButton from "../components/UI/button/MyButton";
import { socialsMdias } from "../../config";

const Home = () => {  

  return (
    <section className="banner" id="banner">
      <div className="content">
        <div className="imgBx">
          <img src="./img/Alex Bagin-min.jpg" alt="Alex Bagin" />
        </div>
        <h3>Alex Bagin</h3>
        <p>IT-Systemelektroniker</p>
        <MyButton >Mein CV</MyButton>        
        <ul className="socialMedia">
          {socialsMdias.map((socialsMdia) => (
            <li key={socialsMdia.name}>
              <Link to={socialsMdia.link}>
                <i className={socialsMdia.styleClass} aria-hidden={socialsMdia.hidden}></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
