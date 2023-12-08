import Fancybox from "../components/Fancybox";

const FancyboxItem = ({ ...props }) => {
  return (
    <Fancybox
      options={{
        Thumbs: {
          type: "modern",
        },
      }}
    >
      <a
        className="portfolio-card__image-wrapper portfolio-card__image-wrapper--border"
        data-fancybox="gallery"
        href={props.img1}
        title="Open the image in full size"
      >
        <img
          className="portfolio-card__image"
          src={props.img1}
          alt={props.name}
          width="350"
          loading="lazy"
        />
      </a>
      <a data-fancybox="gallery" href={props.img2} title="Open the image in full size"></a>
    </Fancybox>
  );
};

export default FancyboxItem;
