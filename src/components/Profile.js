import { Fragment } from "react";
import { Card, ListGroup } from "react-bootstrap";

const Profile = () => {
    return (
        <Fragment>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require("../assets/profilepicture/newprofilepic.jpg")} />
                <Card.Body>
                    <Card.Title>Bleh Seton</Card.Title>
                    <Card.Text>Chicago, Illinois</Card.Text>
                    <Card.Subtitle>Main Expertise</Card.Subtitle>
                    <Card.Body>
                        <Card>React</Card>
                        <Card>Javascript</Card>
                        <Card>C#</Card>
                        <Card>.NET</Card>
                        <Card>ASP.NET</Card>
                        <Card>MVC</Card>
                    </Card.Body>
                    <ListGroup defaultActiveKey="#link1" variant="flush">
                        <ListGroup.Item href="#link1"action>About Me</ListGroup.Item>
                        <ListGroup.Item action>Applications</ListGroup.Item>
                        <ListGroup.Item action>Resume</ListGroup.Item>
                        <ListGroup.Item action>Contact</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                <Card.Footer>
                    <small>
                        <Card.Link href="https://github.com/Blehjo">Github</Card.Link>
                        <Card.Link href="https://www.linkedin.com/in/bleh-s/">LinkedIn</Card.Link>
                        <Card.Link href="">Contact</Card.Link>
                    </small>
                </Card.Footer>
            </Card>
        </Fragment>
    )
}

export default Profile;