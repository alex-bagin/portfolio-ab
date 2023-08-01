import MyButton from "../components/UI/button/MyButton";

const Contact = () => {
  return (
    <section className="contact adjust" id="contact">
      <div className="title">
        <h2>Kontakt</h2>
        <p>Kontakt mit mir aufnehmen</p>
      </div>
      <div className="contactForm">
        <div className="row">
          <input type="text" name="firstName" placeholder="Vorname" />
          <input type="text" name="lastName" placeholder="Name" />
        </div>
        <div className="row">
          <input type="email" name="" placeholder="E-Mail" />
          <input type="tel" name="" placeholder="Mobile No." />
        </div>
        <div className="row2">
          <textarea placeholder="Nachricht"></textarea>
        </div>
        <div className="row2">
          <MyButton type="submit">
            Kontaktanfrage senden
          </MyButton>
        </div>
      </div>
    </section>
  );
};

export default Contact;
