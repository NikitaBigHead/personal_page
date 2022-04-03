import React from "react";
import { Container, Row, Col } from "reactstrap";

export const About = () => (
  <Container>
    <h2>About</h2>
    <Row>
      <Col>
        <strong>
          This site is deployed as a static website in S3 and was built with the
          following technologies:
        </strong>
      </Col>
    </Row>
    <Row>
      <Col>
        <ul>
          <li>
            <a href="https://reactjs.org/">React</a>
          </li>
          <li>
            <a href="https://reactstrap.github.io/">reactstrap</a>
          </li>
          <li>
            <a href="https://fontawesome.com/how-to-use/on-the-web/using-with/react">
              Font Awesome
            </a>
          </li>
          <li>
            <a href="http://momentjs.com/">Moment.js</a>
          </li>
          <li>
            <a href="https://github.com/ReactTraining/react-router">
              react-router
            </a>
          </li>
        </ul>
      </Col>
    </Row>

    <br />
    <Row>
      <Col>
        <p>
          The code can be found on my personal{" "}
          <a href="https://github.com/oswaldodiaz/mypage">Github</a> account.
        </p>
      </Col>
    </Row>
  </Container>
);
