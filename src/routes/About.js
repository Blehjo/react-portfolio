import React, { Fragment } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

export default function About() {
  return (
    <Fragment>
      <Row>
        <Col>
          <Card style={{ padding: '1rem'}}>

          <h1 >About</h1>
          <p>My name is Bleh Seton and although I was born in Chicago, my family is from Guinea and Liberia. University of Illinois at Chicago is my alma mater, but I spent half my academic career between Germany and Austria. When I am not at work you can catch me playing video games, painting on whatever I can find, and rating a new restaurant.<br></br><br></br>Currently, I work in public health as a resource navigator. I decided to venture into web development during the pandemic.  My current job requires navigating the web in order to learn about organizations that offer resources to individuals and families in neighborhoods that do not have access to basic necessities. After being apart of seminars and using sites with a catalogue of organizations, I learned that a lot of the sites are difficult to navigate and aren't reliable. From there, I decided that I wanted to understand the ins and outs of programming to solve these problems. </p>
          <p>
          I have extensive knowledge of MERN Stack (MongoDb, Express.js, React.js, and
Node.js) and SQL. I continue to push my development by learning languages like
Golang and C#. Combined with my communication and problem-solving skills, I
think I would be an excellent candidate for the Full-Stack Software Developer at
IDOC.
<br></br>In my current role as a Software Engineer at NORC, I design frameworks, navigate
the traffic of records in databases, and handle project implementation for a variety
of clients. In my latest project, I identified areas of low productivity and
established a framework that was efficient and used a single software, so the
company could save money on licensing and storage. Through working
collaboratively with marketing, design, and product teams, I have developed strong
communication and teamwork skills. I can bring my technical skills and passion
for collaboration to the team.
I have always been fascinated about software engineering and compiling data,
which led me to pursue certification in full-stack web development. I am constantly
seeking out new technologies and staying up-to-date on machine learning and
virtual machines. I would love to bring my knowledge and at the same time gain
experience developing Software as a service at IDOC.
          </p>
          </Card>
        </Col>
      </Row>
      <Outlet/>
    </Fragment>
  );
}
