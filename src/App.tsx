import React from "react";
import "./App.css";

import { Container, Row } from "reactstrap";

import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Posts } from "./components/Posts";
import { ProfileSummary } from "./components/ProfileSummary";
import { TopBar } from "./components/TopBar";

export const App = () => {
    return (
        <div className="App">
            <TopBar />
            <ProfileSummary />
            <Container>
                <Row>
                    <Education />
                </Row>
                <Row>
                    <Experience />
                </Row>
            </Container>
            <Footer />
        </div>
    );
};
