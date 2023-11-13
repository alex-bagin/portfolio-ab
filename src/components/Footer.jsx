import { Link } from "react-router-dom";
import { socialsMedias } from "../../config";

const Footer = () => {
  return (
    <div className="footer container" id="contacts">
      <div className="footer__inner card">
        <div className="footer__body">
          <div className="footer__title h2">
            {"Haben Sie noch offene Fragen?"}
            <br className="hidden-mobile" />
            <span className="accent-color">Dann zögern Sie nicht lange!</span>
            <div className="footer__description">
              <p>Kontaktieren Sie mich gern.</p>
            </div>
          </div>
        </div>
        <div className="footer__contacts">
          <ul className="socialMedia">
            {socialsMedias.map((socialsMedia) => (
              <li key={socialsMedia.name}>
                <Link to={socialsMedia.link} target="_blank">
                  <i className={socialsMedia.styleClass} aria-hidden={socialsMedia.hidden}></i>
                </Link>
              </li>
            ))}
          </ul>
          <p>&copy; Alex Bagin, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
