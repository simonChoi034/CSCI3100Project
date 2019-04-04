import React, { Component } from 'react';
import "./jobs_wall.css";
import JobWall from '../components/job_wall/JobsWall';

const Jobs = () => {
    return (
        <div>
            <p>Jobs Wall Page</p>
            <JobWall />
        </div>
    );
}

export default Jobs;