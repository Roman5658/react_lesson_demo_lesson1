
import './CourseDuration.css';

const CourseDuration = ({ course }) => {
  return (
    <div className="duration">
      <span>{course.title}</span> - <strong>{course.monthDuration} months</strong>
    </div>
  );
};

export default CourseDuration;
