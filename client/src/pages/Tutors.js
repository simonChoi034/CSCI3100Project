import React, { Component } from 'react';
import "./Tutors.css";
import TutorsWall from '../components/tutor_wall/TutorsWall'
import { Container } from 'reactstrap'

const Tutors = () => {
    const limit = 8;
    return (
        <div className="py-4">
            <Container>
                <TutorsWall limit={limit} homeCall={false} />
            </Container>
        </div>
    );
};

export default Tutors;