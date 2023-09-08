import ContactInfo from "./ContactInfo";
import Education from "./Education";
import Languages from "./Languages";
import Profile from "./Profile";
import Skills from "./Skills";

const LeftSide = () => {
  return (
    <div className="leftSide">
      <Profile />
      <ContactInfo />
      <Education />
      <Skills />
      <Languages />
    </div>
  );
};

export default LeftSide;
