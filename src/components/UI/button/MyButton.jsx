import "./MyButton.css";

const MyButton = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonVisibility,
  ...props
}) => {
  const STYLES = ["btn--primary", "btn--outline"];
  const SIZE = ["btn--small", "btn--medium", "btn--large"];
  const VISIBYLITY = ["visible", "hidden"];

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  const checkButtonVisibility = VISIBYLITY.includes(buttonVisibility)
    ? buttonVisibility
    : VISIBYLITY[0];
  return (
    <button
      {...props}
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonVisibility}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default MyButton;
