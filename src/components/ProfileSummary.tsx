import React from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import { Image } from "../utils/Image";
import SocialIcons from "./SocialIcons";

export const ProfileSummary = () => {
    return (
        <Jumbotron>
            <Container className="profileSummary">
                <Row>
                    <Col className="profileSummaryPicture" xs="12" md={3}>
                        <Image
                            name="profilePic.png"
                            alt="Oswaldo Diaz's profile picture"
                        />
                    </Col>
                    <Col>
                        <h1 className="display-3">
                            Hello there, I am Nikita Kuzmin
                        </h1>
                        <p className="lead">
                            I am a <strong> junior ML&DL developer</strong> who
                            understands classical machine learning and deep
                            learning algorithms, computer vision. I want to do
                            research on safe AI and AI tasks for robotics. I
                            have experience with models for speech and face
                            recognition. Worked with segmentation of facial
                            parts. Has been involved in generating audio from
                            text. Worked on a project for recognizing formulas
                            in speech.
                        </p>
                        <div>
                            <SocialIcons />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
};
