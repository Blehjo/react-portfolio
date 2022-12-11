import { Fragment } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { LinkedinFilled, GithubFilled, MailFilled} from '@ant-design/icons';
import TabPages from "./TabPages";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const Profile = () => {
    return (
        <Fragment>
            <Row style={{ width: '75%', margin: 'auto', marginTop: '3rem', marginBottom: '3rem'}}>
                <Col md={4} lg={4} xl={3}>
                    <Card>
                        <Card.Img variant="top" src={require("../assets/profilepicture/newprofilepic.jpg")} />
                        <Card.Body>
                            <Card.Title>Bleh Seton</Card.Title>
                            <Card.Text>Chicago, Illinois</Card.Text>
                            <Card.Link href='mailto:blehjooo@gmail.com'>bseton11@gmail.com</Card.Link>
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
                                <Card.Link href="https://github.com/Blehjo"><GithubFilled /></Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/bleh-s/"><LinkedinFilled /></Card.Link>
                                {/* <Card.Link href='https://stackoverflow.com/users/20506079/bleh'><FontAwesomeIcon icon="fa-brands fa-stack-overflow" /></Card.Link> */}
                                <Card.Link href='mailto:blehjooo@gmail.com'><MailFilled /></Card.Link>
                            </small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={8} lg={8} xl={9}>
                    <TabPages/>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Profile;