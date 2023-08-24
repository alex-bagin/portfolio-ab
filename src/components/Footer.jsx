import { Link } from "react-router-dom";
import { socialsMedias } from "../../config";

const Footer = () => {
  return (
    <div className="footer container" id="contacts">
      <div className="footer__inner card">
        <div className="footer__body">
          <div className="footer__title h2">
            {"Do you want to ask"}
            <br className="hidden-mobile" />
            <span className="accent-color">something interesting?</span>
            <div className="footer__description">
              <p>Contact me. I am in touch mon-fri form 8am to 8pm (gmt).</p>
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
