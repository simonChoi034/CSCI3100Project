import React, { Component } from 'react';
import "./Tutors.css";
import TutorsWall from '../components/tutor_wall/TutorsWall'
import { Container } from 'reactstrap'

const Tutors = () => {
    return (
        <Container>
            <TutorsWall />
        </Container>
    );
};

export default Tutors;