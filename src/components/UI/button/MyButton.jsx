import classes from "./MyButton.module.css";

const MyButton = ({ children, ...props }) => {
  const rootClasses = [classes.myBtn];

  return (
    <button {...props} className={rootClasses.join(" ")}>
      {children}
    </button>
  );
};

export default MyButton;
