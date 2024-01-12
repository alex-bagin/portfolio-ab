import FancyboxItem from "./FancyboxItem";
import PortfolioCardDescription from "./PortfolioCardDescription";

const PortfolioCard = (props) => {
  return (
    <article className="portfolio-card card">
      <FancyboxItem {...props} />
      <PortfolioCardDescription {...props} />
    </article>
  );
};

export default PortfolioCard;
