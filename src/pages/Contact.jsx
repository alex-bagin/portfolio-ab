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
        <div className="row">
          <input type="text" name="firstName" placeholder="Vorname" autoComplete="off" required/>
          <input type="text" name="lastName" placeholder="Name" autoComplete="off" required/>
        </div>
        <div className="row">
          <input type="email" name="email" placeholder="E-Mail" autoComplete="off" required/>
          <input type="tel" name="tel" placeholder="Telefon" autoComplete="off"/>
        </div>
        <div className="row2">
          <textarea placeholder="Nachricht"></textarea>
        </div>
        <div className="row2">
          <MyButton 
            type={"submit"}
            buttonStyle={"btn--outline"}
            buttonSize={"btn--medium"}
          >
            Kontaktanfrage senden
          </MyButton>
        </div>
      </form>
      </div>
      
    </section>
  );
};

export default Contact;
