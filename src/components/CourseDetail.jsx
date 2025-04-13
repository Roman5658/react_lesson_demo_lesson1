
import './CourseDetail.css';

const CourseDetail = ({ course }) => {
  return (
    <div className="course">
      <h3>{course.title}</h3>
      <p><strong>Months:</strong> {course.monthDuration}, <strong>Hours:</strong> {course.hourDuration}</p>
      <p><strong>Rating:</strong> {course.rating}, <strong>Avg Result:</strong> {course.avgResult}%</p>
      <h4>Modules:</h4>
      <ul>
        {course.modules.map((mod, i) => <li key={i}>{mod}</li>)}
      </ul>
    </div>
  );
};

export default CourseDetail;
