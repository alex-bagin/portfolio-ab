import MyButton from "../components/UI/button/MyButton";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="contact__inner container">
        <div className="title">
          <h2>Contact</h2>
          <p>Contact me</p>
        </div>
        <form className="contactForm">
          <div className="row">
            <input
              type="text"
              name="firstName"
              placeholder="first name"
              autoComplete="off"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="last name"
              autoComplete="off"
              required
            />
          </div>
          <div className="row">
            <input type="email" name="email" placeholder="e-mail" autoComplete="off" required />
            <input type="tel" name="tel" placeholder="phone" autoComplete="off" />
          </div>
          <div className="row2">
            <textarea placeholder="message"></textarea>
          </div>
          <div className="row2">
            <MyButton type={"submit"} buttonStyle={"btn--outline"} buttonSize={"btn--medium"}>
              Contact me!
            </MyButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
