import { Link } from "react-router-dom";
import { socialsMedias } from "../../config";

const Copyright = () => {
  return (
    <div className="copyright">
      <ul className="socialMedia">
            {socialsMedias.map((socialsMedia) => (
              <li key={socialsMedia.name}>
                <Link to={socialsMedia.link} target="_blank">
                  <i className={socialsMedia.styleClass} aria-hidden={socialsMedia.hidden}></i>
                </Link>
              </li>
            ))}
          </ul>
      <p>Copyright &copy; 2022 Alex Bagin. All Rights Reserved.</p>
    </div>
  );
};

export default Copyright;
