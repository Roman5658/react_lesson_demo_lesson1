
import React from 'react';
import CourseTitle from './components/CourseTitle';
import CourseDuration from './components/CourseDuration';
import FamilyComponent from './components/FamilyComponent';
import CourseDetail from './components/CourseDetail';

const coursesTitleArray = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];

const coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];

const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
        rating: 5,
        avgResult: 99
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html','css','js','mysql','mongodb','react','angular','aws','docker','git','java core','java advanced'],
        rating: 4.998,
        avgResult: 97
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html','css','js','mysql','mongodb','react','angular','aws','docker','git','python core','python advanced'],
        rating: 4.812,
        avgResult: 98
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
        rating: 4.65,
        avgResult: 97
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html','css','js','mysql','mongodb','react','angular','aws','docker','git','node.js','python','java'],
        rating: 4.772,
        avgResult: 100
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
        rating: 4.53,
        avgResult: 90
    }
];

function App() {
    return (
        <div>
            <h1>Homework</h1>

            <h2>1. Course Titles</h2>
            {coursesTitleArray.map((title, i) => <CourseTitle key={i} title={title} />)}

            <h2>2. Course Durations</h2>
            {coursesAndDurationArray.map((course, i) => <CourseDuration key={i} course={course} />)}

            <h2>3. Simpsons Family</h2>
            <FamilyComponent />

            <h2>4. Detailed Courses</h2>
            {coursesArray.map((course, i) => <CourseDetail key={i} course={course} />)}
        </div>
    );
}

export default App;
