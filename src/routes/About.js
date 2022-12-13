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
            <p> 
            My name is Bleh Seton and although I was born in Chicago, my family is from Guinea and Liberia. University of Illinois at Chicago is my alma mater. Fortunately, I was able to further my education by spending half my academic career between Germany and Austria through the Benjamin A. Gilman program where I studied finance and international economics. <br></br><br></br>I ventured into software engineering because of my love for video games and its online communities. Although I love games, I began my software engineering journey with web development at Northwestern University. I have extensive knowledge of MERN Stack (MongoDb, Express.js, React.js, and Node.js), .NET (ASP.NET, Razor Pages, and C#), and SQL. I continue to push my development by being an active member in online communities like ZeroToMastery (ZTM), IGDB, and C#'s and React's Discord channels. When I am not at work you can catch me playing video games, painting on whatever I can find, and rating a new restaurant.
            <br></br><br></br>Before software engineering, I worked in public health as a resource navigator. Resource navigation required navigating the web in order to learn about organizations that offer resources to individuals and families in neighborhoods that do not have access to basic necessities. After being apart of seminars and using sites with a catalogue of organizations, I learned that a lot of the sites are difficult to navigate and aren't reliable. From there, I decided that I wanted to understand the ins and outs of programming to solve these problems. <br></br><br></br>I would be an excellent candidate for Full-Stack Software Development because of my approach to coding. Reading documentation as I code, being involved in programming communities, and staying up to date on new technologies and their new versions have made me versatile software engineer. Combined with my communication and problem-solving skills.<br></br><br></br>In my past role as a Software Engineer at NORC, I design frameworks, navigate the traffic of records in databases, and handle project implementation for a variety of clients. In my last project, I identified areas of low productivity and established a framework that was efficient and used a single software, so the company could save money on licensing and storage. <br></br><br></br>Through working collaboratively with marketing, design, and product teams, I have developed strong communication and teamwork skills. I can bring my technical skills and passion for collaboration to the team. I have always been fascinated about software engineering and compiling data, which led me to pursue certification in full-stack web development. I am constantly seeking out new technologies and staying up-to-date on machine learning and virtual machines. I would love to bring my knowledge to your team and gain experience on my own personal journey. 
            </p>
          </Card>
        </Col>
      </Row>
      <Outlet/>
    </Fragment>
  );
}
