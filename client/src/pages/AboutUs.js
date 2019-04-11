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
                            <CardText className="words">TeachHub is an interactive platform for students and tutors matching in a convenient way.</CardText>
                        </div>
                    </Card>
                    <Card className="my-4 p-5">
                        <CardTitle><h4>Why you should use TeachHub?</h4></CardTitle>
                        <div className="text-left">
                            <CardText className="words">Students can: </CardText>
                            <CardText className="words"><span className="check-box"><FaRegCheckSquare className="mx-3" /></span>Enhance their academic results</CardText>
                            <CardText className="words"><span className="check-box"><FaRegCheckSquare className="mx-3" /></span>Learn new non-academic skills</CardText>
                            <CardText className="words">Tutors can:</CardText>
                            <CardText className="words"><span className="check-box"><FaRegCheckSquare className="mx-3" /></span>Earn a living</CardText>
                            <CardText className="words">Easy to use:</CardText>
                        <CardText className="words"><span className="check-box"><FaRegCheckSquare className="mx-3" /></span>We provide a user-friendly chatroom for students and tutors to communicate easily</CardText>
                        </div>
                    </Card>
                    <Card className="my-4 p-5">
                        <CardTitle><h4>What you can find in TeachHub?</h4></CardTitle>
                        <div className="text-left">
                            <CardText className="words">Students can: </CardText>
                            <CardText className="words"><span className="check-box"><FaRegCheckSquare className="mx-3" /></span>Find the most suitable tutor</CardText>
                            <CardText className="words">Tutors can:</CardText>
                            <CardText className="words"><span className="check-box"><FaRegCheckSquare className="mx-3" /></span>Find a tutoring job in the easiest way</CardText>
                        </div>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default AboutUs;