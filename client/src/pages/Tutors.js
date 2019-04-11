import React, { Component } from 'react';
import "./Tutors.css";
import TutorsWall from '../components/tutor_wall/TutorsWall'
import { Container } from 'reactstrap'

const Tutors = () => {
    return (
        <div className="py-5">
            <Container>
                <TutorsWall />
            </Container>
        </div>
    );
};

export default Tutors;