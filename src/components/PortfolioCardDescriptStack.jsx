const PortfolioCardDescriptStack = (props) => {
  const usedStack = props.stack;
  console.log("usedStack: ", usedStack);
  return (
    <div className="stack">
      <ul className="stack__list flow">
        {usedStack.map((stackItem) => (
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
  );
};

export default PortfolioCardDescriptStack;
