const ContactInfo = () => {
  return (
    <div className="contactInfo">
      <h3 className="title1">Persönliche Daten</h3>
      <ul>
        <li>
          <span className="icon">
            <i className="fa fa-home" aria-hidden="true"></i>
          </span>
          <span className="text">Adresse</span>
          <p className="address">
            Alter Kamp 3 <br />
            Hiddenhausen, Deutschland
          </p>
        </li>
        <li>
          <span className="icon">
            <i className="fa fa-phone" aria-hidden="true"></i>
          </span>
          <span className="text">Telefon</span>
          <p className="address">+49 176 34961220</p>
        </li>
        <li>
          <span className="icon">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
          </span>
          <span className="text">E-Mail</span>
          <p className="address">alex.bagin@gmx.de</p>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
