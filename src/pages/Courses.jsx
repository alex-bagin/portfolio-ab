import CoursBoxItem from "../components/CoursBoxItem";

const Courses = () => {
  return (
    <section className="courses section" id="courses">
      <div className="courses__inner container">
        <div className="title">
          <h2>Kurse</h2>
          <p>Zuletzt besuchte Kurse, um meine Fähigkeiten und Kenntnisse zu verbessern.</p>
        </div>
        <CoursBoxItem />
      </div>
    </section>
  );
};

export default Courses;
