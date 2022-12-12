import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

export default function Skills() {
  return (
    <Fragment>
      <Row md={1} lg={2} xl={2}>
        <Col>
          <Card style={{ margin: '.5rem'}}>
            <Card.Title>Front-End</Card.Title>
            <Card.Body>
              <p>React.js</p>
              <p>JSX</p>
              <p>Javascript</p>
              <p>CSS</p>
              <p>SASS</p>
              <p>CSS in JS</p>
              <p>HTML5</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ margin: '.5rem'}}>
            <Card.Title>Back-End</Card.Title>
            <Card.Body>
              <p>C#</p>
              <p>Node.js</p>
              <p>Express.js</p>
              <p>Golang</p>
              <p>Axios</p>
              <p>Linux</p>
              <p>Command Line Interface</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ margin: '.5rem'}}>
            <Card.Title>Databases</Card.Title>
            <Card.Body>
              <p>SQL</p>
              <p>NoSQL</p>
              <p>MySQL</p>
              <p>SQLite</p>
              <p>MongoDB</p>
              <p>GraphQL</p>
              <p>Apollo</p>
              <p>AWS</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ margin: '.5rem'}}>
            <Card.Title>Tools</Card.Title>
            <Card.Body>
              <p>Visual Studio</p>
              <p>Visual Studio Code</p>
              <p>.NET</p>
              <p>ASP.NET</p>
              <p>Azure</p>
              <p>Bootstrap</p>
              <p>Xcode</p>
              <p>Git</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <p><a target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/1o2yBTDF3RYsgWMEvibkVeEGmdHjpVEHV/view?usp=sharing'>Link To Resume</a></p>
      <Outlet/>
    </Fragment>
  );
}