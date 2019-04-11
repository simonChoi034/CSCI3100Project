import React, { Component } from "react";
import { Container, Card, CardTitle, CardText } from "reactstrap";
import { FaRegCheckSquare } from "react-icons/fa";
import './AboutUs.css';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Card className="mt-5 mb-4 p-5">
                        <CardTitle><h4>What is TeachHub?</h4></CardTitle>
                        <div className="text-left">
                            <CardText>TeachHub is an interactive platform for students and tutors matching in an convenient way.</CardText>
                        </div>
                    </Card>
                    <Card className="my-4 p-5">
                        <CardTitle><h4>Why you should use TeachHub?</h4></CardTitle>
                        <div className="text-left">
                            <CardText>Students can: </CardText>
                            <CardText><FaRegCheckSquare className="mx-3" />Enhance their academic results</CardText>
                            <CardText><FaRegCheckSquare className="mx-3" />Learn new non-academic skills</CardText>
                            <CardText>Tutors can:</CardText>
                            <CardText><FaRegCheckSquare className="mx-3" />earn a living</CardText>
                            <CardText>Easy to use:</CardText>
                        <CardText><FaRegCheckSquare className="mx-3" />We provide a user-friendly chatroom for students and tutors to communicate easily</CardText>
                        </div>
                    </Card>
                    <Card className="my-4 p-5">
                        <CardTitle><h4>What you can find in TeachHub?</h4></CardTitle>
                        <div className="text-left">
                            <CardText>Students can: </CardText>
                            <CardText><FaRegCheckSquare className="mx-3" />Find the most suitable tutor</CardText>
                            <CardText>Tutors can:</CardText>
                            <CardText><FaRegCheckSquare className="mx-3" />Find a tutoring job in the easiest way</CardText>
                        </div>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default AboutUs;