import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import styles from './CourseCard.module.css';


const CourseCard = ({ font, title, description, salary, jobPositions, careerGrowth }) => {
    const { store } = useContext(Context);


    return (
        <div
            className={styles["course-card"]}>
            <div className={styles["hover-overlay"]}>
                <i className={`fa-solid ${font}`}></i>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={styles["course-stats"]}>
                <p><strong><i className="fa-solid fa-dollar-sign"></i> Average Salary per year:</strong> {salary}</p>
                <p><strong><i className="fa-solid fa-suitcase"></i> Job Positions:</strong> {jobPositions}</p>
                <p><strong> <i className="fa-solid fa-arrow-trend-up"></i> Career Growth:</strong> {careerGrowth}</p>
            </div>
            <button className={styles["course-button"]}>See plans & prices</button>
        </div>
    );
};

export default CourseCard;