const Languages = () => {
  const languages = [
    { name: "Deutsch", styleClasse: "text", percentClasse: "percent", percent: "90%" },
    { name: "Englisch", styleClasse: "text", percentClasse: "percent", percent: "40%" },
    { name: "Russisch", styleClasse: "text", percentClasse: "percent", percent: "85%" },
  ];
  return (
    <div className="contactInfo language">
      <h3 className="title1">Sprachen</h3>
      <ul>
        {languages.map((language) => (
          <li key={language.name}>
            <span className={language.styleClasse}>{language.name}</span>
            <span className={language.percentClasse}>
              <div style={{ width: language.percent }}></div>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
