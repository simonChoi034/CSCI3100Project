import React, { Component } from 'react';
import "./jobs_wall.css";
import JobWall from '../components/job_wall/JobWall'

const Jobs = () => {
    return (
        <div>
            <p>Jobs Wall Page</p>
            <JobWall />
        </div>
    );
}

export default Jobs;