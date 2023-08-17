import "./Switch.css";
const Switch = () => {
  return (
    <div className="switch">
      <input type="checkbox" name="switch" />
      <label htmlFor="switch" className="button"></label>
    </div>
  );
};

export default Switch;
