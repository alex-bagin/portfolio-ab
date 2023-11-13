import { Link } from "react-router-dom";

const CoursBoxItem = (props) => {
  const courses = props.courses;
  return (
    <div className="courses__content">
      {courses.map((course) => (
        <Link to={course.href} target="_blank" key={course.name}>
          <div className="courses__content--contentBox card card--hoverable">
            <img src={course.src} />
            <h4>{course.name}</h4>
            <p>{course.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CoursBoxItem;
