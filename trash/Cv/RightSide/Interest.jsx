const Interest = () => {
  const interests = [
    { name: "Coding", icon: "fa fa-code", hidden: "true" },
    { name: "Computer", icon: "fa fa-laptop", hidden: "true" },
    { name: "Volleyball", icon: "fa fa-solid fa-volleyball", hidden: "true" },
    { name: "Lesen", icon: "fa fa-book", hidden: "true" },
  ];
  return (
    <div className="about interest">
      <h2 className="title2">Hobbys</h2>
      <ul>
        {interests.map((interest) => (
          <li key={interest.name}>
            <i className={interest.icon} aria-hidden={interest.hidden}></i>
            {interest.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Interest;
