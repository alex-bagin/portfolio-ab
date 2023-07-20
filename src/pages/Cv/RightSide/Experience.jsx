const Experience = () => {
  const education = [
    { name: "Bau und Konfiguration der Raid-Systeme(SAN)" },
    { name: "Demontage und Montage der Hardwarekomponenten" },
    { name: "Server Installation und Konfiguration" },
    { name: "Prüfung der Server Funktionsfähigkeit" },
    { name: "Server Problemanalyse und -behebung" },
    { name: "Server- Endtest" },
  ];
  const experiences = [
    { name: "Clients in Netzwerke einbinden" },
    { name: "Software zur Verwaltung von Daten" },
    { name: "Serviceanfragen bearbeiten" },
    { name: "Daten systemübergreifend bereitstellen" },
    { name: "Netzwerke und Dienste bereitstellen" },
    { name: "IT-Sicherheit und Datenschutz in IT-Systemen" },
    { name: "Prüfen der elektrischen Sicherheit von Geräten und Betriebsmitteln" },
  ];
  return (
    <div className="about experince">
      <h2 className="title2">Erfahrung</h2>
      <div className="box">
        <div className="year_company">
          <h5>2005 - heute</h5>
          <h5>Wortmann AG</h5>
        </div>
        <div className="text">
          <h4>IT-Systemelektroniker</h4>
          <ul>
            {education.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="box">
        <div className="year_company">
          <h5>2002 - 2005</h5>
          <h5>Wortmann AG</h5>
        </div>
        <div className="text">
          <h4>Ausbildung zum IT-Systemelektroniker</h4>
          <ul>
            {experiences.map((experience) => (
              <li key={experience.name}>{experience.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
