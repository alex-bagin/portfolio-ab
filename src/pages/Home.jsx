import { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import { DarkContext } from "../context";

const Home = () => {
  const { isDark } = useContext(DarkContext);
  const socialsMdias = [
    {
      name: "telegram",
      link: "",
      styleClass: "fa fa-brands fa-telegram",
      hidden: "true",
    },
    {
      name: "mobile",
      link: "",
      styleClass: "fa fa-solid fa-mobile-retro",
      hidden: "true",
    },
    { name: "email", link: "", styleClass: "fa fa-envelope", hidden: "true" },
  ];

  return (
    <section className="banner" id="banner">
      <div className="content">
        <div className="imgBx">
          <img src="./img/Alex Bagin-min.jpg" alt="Alex Bagin" />
        </div>
        <h3>Alex Bagin</h3>
        <p>IT-Systemelektroniker</p>

        <MyButton dark={isDark}>Mein CV</MyButton>

        <ul className="socialMedia">
          {socialsMdias.map((socialsMdia) => (
            <li key={socialsMdia.name}>
              <a href={socialsMdia.link}>
                <i className={socialsMdia.styleClass} aria-hidden={socialsMdia.hidden}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
