import React, { Component } from 'react';
import "./tutors.css";
import TutorList from '../components/tutor_list/TutorList'

const Tutors = () => {
    return (
        <div>
            <p>Tutors List Page</p>
            <TutorList />
        </div>
    );
}

export default Tutors;