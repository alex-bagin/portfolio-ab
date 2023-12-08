import FancyboxItem from "./FancyboxItem";
import PortfolioCardDescript from "./PortfolioCardDescript";

const PortfolioCard = (props) => {
  return (
    <article className="portfolio-card card">
      <FancyboxItem {...props} />
      <PortfolioCardDescript {...props} />
    </article>
  );
};

export default PortfolioCard;
