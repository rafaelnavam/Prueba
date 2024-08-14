import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import CourseCard from './CourseCard.jsx';
import styles from './CourseList.module.css';

const CourseList = () => {
    const { store } = useContext(Context);
    console.log(store.courses.length)

    return (
        <div className={styles["course-list"]}>
            <div className={styles["tittle-list"]}>
                <div className={styles["tittle"]}>
                    <h1>Choose your career gaining technical skills</h1>

                </div>
            </div>
            {store.courses.map((course, index) => (
                <CourseCard
                    key={index}
                    font={course.font}
                    title={course.title}
                    description={course.description}
                    salary={course.salary}
                    jobPositions={course.jobPositions}
                    careerGrowth={course.careerGrowth}
                />
            ))}
        </div>
    );
};

export default CourseList;