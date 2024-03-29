/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PortfolioCardDescription = (props) => {
  return (
    <div className="portfolio-card__body">
      <time className="portfolio-card__date">{props.date}</time>
      <h3 className="portfolio-card__title">
        <Link
          className="portfolio-card__link"
          to={props.url}
          target="_blank"
          title="Open the website in a new tab"
        >
          {props.name}
        </Link>
      </h3>
      <div className="portfolio-card__description">
        <p>{props.description}</p>
      </div>
      <div className="stack">
        <ul className="stack__list flow">
          {props.stack.map((stackItem) => (
            <li className="stack__item" key={stackItem.title}>
              <img
                className="stack__image"
                src={stackItem.src}
                alt={stackItem.alt}
                title={stackItem.title}
                width="32"
                height="32"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PortfolioCardDescription;
