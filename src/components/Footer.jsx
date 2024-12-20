import { Link } from "react-router-dom";
import { socialMedias } from "../../config";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="footer container" id="contacts">
      <div className="footer__inner card">
        <div className="footer__body">
          <div className="footer__title h2">
            {"Konnte mein Portfolio Ihr Interesse wecken?"}
            <br className="hidden-mobile" />
            <span className="accent-color">Kontaktieren Sie mich gern!</span>
          </div>
        </div>
        <div className="footer__contacts">
          <ul className="socialMedia">
            {socialMedias.map((socialsMedia) => (
              <li key={socialsMedia.name}>
                <Link to={socialsMedia.link} target="_blank">
                  <i
                    className={socialsMedia.styleClass}
                    aria-hidden={socialsMedia.hidden}
                  ></i>
                </Link>
              </li>
            ))}
          </ul>
          <p>&copy; Alex Bagin, {date} </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
