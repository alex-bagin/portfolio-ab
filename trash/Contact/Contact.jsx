import { useState } from "react";
import MyButton from "../../src/components/UI/button/MyButton";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  console.log("contacts: ", contacts);

  const addNewContact = (e) => {
    e.preventDefault();
    const newContact = {
      ...contact,
      id: Date.now(),
    };
    setContacts([newContact, ...contacts]);
    setContact({ name: "", email: "", message: "" });
  };

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
              <label htmlFor="name">Name</label>
              <input
                value={contact.name}
                onChange={(e) => setContact({ ...contact, name: e.target.value })}
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                required
              />
            </div>
            {/* <div className="row">
              <label htmlFor="lastName">Nachname</label>
              <input type="text" id="lastName" name="lastName" autoComplete="off" required />
            </div> */}
            <div className="row">
              <label htmlFor="email">E-Mail</label>
              <input
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                required
              />
            </div>
            {/* <div className="row">
              <label htmlFor="tel">Telefon</label>
              <input type="tel" id="tel" name="tel" autoComplete="off" />
            </div> */}
          </div>

          <div className="row2">
            <label htmlFor="textArea">Ihre Nachricht:</label>
            <textarea
              value={contact.message}
              onChange={(e) => setContact({ ...contact, message: e.target.value })}
              id="textArea"
              name="textArea"
            ></textarea>
          </div>
          <div className="row2">
            <MyButton
              onClick={addNewContact}
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
