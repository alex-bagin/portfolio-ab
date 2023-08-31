import MyButton from "../components/UI/button/MyButton";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="contact__inner container">
        <div className="title">
          <h2>Kontakt</h2>
          <p>Kontakt mit mir aufnehmen</p>
        </div>
        <form className="contactForm">
          <div className="contactForm__inputs">
            <div className="row">
              <label htmlFor="firstName">Vorname</label>
              <input type="text" id="firstName" name="firstName" autoComplete="off" required />
            </div>
            <div className="row">
              <label htmlFor="lastName">Nachname</label>
              <input type="text" id="lastName" name="lastName" autoComplete="off" required />
            </div>
            <div className="row">
              <label htmlFor="email">E-Mail</label>
              <input type="email" id="email" name="email" autoComplete="off" required />
            </div>
            <div className="row">
              <label htmlFor="tel">Telefon</label>
              <input type="tel" id="tel" name="tel" autoComplete="off" />
            </div>
          </div>

          <div className="row2">
            <label htmlFor="textArea">Ihre Nachricht:</label>
            <textarea id="textArea" name="textArea"></textarea>
          </div>
          <div className="row2">
            <MyButton type={"submit"} buttonStyle={"btn--outline"} buttonSize={"btn--medium"}>
              Kontaktanfrage senden
            </MyButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
