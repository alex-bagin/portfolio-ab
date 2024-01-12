import CoursBoxItem from "../components/CoursBoxItem";

const Courses = () => {
  return (
    <section className="courses section" id="courses">
      <div className="courses__inner container">
        <div className="title">
          <h2>Kurse</h2>
          <p>Zuletzt besuchte Kurse zur Verbesserung meiner Fähigkeiten und Kenntnisse.</p>
        </div>
        <CoursBoxItem />
      </div>
    </section>
  );
};

export default Courses;
