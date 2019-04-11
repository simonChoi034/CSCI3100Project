import React, { Component } from "react";
import './AboutUs.css';
import { Container, Card } from 'reactstrap';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <Container className="my-3">
                    <Card className="p-3">
                        <h2>What is TeachHub?</h2>
                        <p>We provide an interactive platform for students and tutors matching in an convenient way.</p>
                        <p>Therefore, students can enhance their academic results or learn new non-academic skills while private tutors can earn a living.</p>
                    </Card>
                </Container>
                <Container className="my-3">
                    <Card className="p-3">
                        <h2>Why you should use TeachHub?</h2>
                        <p>Easy to use.</p>
                        <p>We provide a user-friendly chatroom for students and tutors to communicate easily.</p>
                    </Card>
                </Container>
                <Container className="my-3">
                    <Card className="p-3">
                        <h2>What you can find in TeachHub?</h2>
                        <p>Students can find the most suitable tutor.</p>
                        <p>Tutors can find a tutoring job in the easiest way.</p>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default AboutUs;