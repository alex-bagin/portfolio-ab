import classes from "./MyButton.module.css";

const MyButton = ({ children, dark, ...props }) => {
  const rootClasses = [classes.myBtn];

  if (dark) {
    rootClasses.push(classes.dark);
  }

  return (
    <button {...props} className={rootClasses.join(" ")}>
      {children}
    </button>
  );
};

export default MyButton;
