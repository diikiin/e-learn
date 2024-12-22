import React, {useEffect, useState} from 'react';
import {fetchCourses} from './api';

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const getCourses = async () => {
            const data = await fetchCourses();
            setCourses(data);
        };
        getCourses();
    }, []);

    return (
        <div className="container" style={{marginLeft: 20 + 'px'}}>
            <section>
                <h2 align="center">Available Courses</h2>
                <ul>
                    {courses.map((course) => (
                        <li>
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <p><strong>Price:</strong> ${course.price}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default CourseList;
