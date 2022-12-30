import { Fragment, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Nav, Row, Col } from "react-bootstrap";

import { GithubFilled, GlobalOutlined, ArrowLeftOutlined } from "@ant-design/icons";

import { ApplicationData } from "./ApplicationData";

const ApplicationProfile = () => {
    const navigate = useNavigate();
    const [information, setInformation] = useState([]);
    const { id } = useParams();
    const applications = ApplicationData;

    const handleClickEvent = () => {
        navigate('/portfolio')
    }

    useEffect(() => {
        const getApplication = () => {
            const app = applications.find((element) => element.id == id);
            setInformation(app);
        }
        getApplication();
    }, [id, applications]);

    const { applicationTitle, mainPhoto, applicationLink, github, description } = information;

    return (
        <Fragment>
            <Col>
                <Card.Img style={{ objectFit:'cover', borderRadius: '.5rem', marginBottom: '1rem' }} src={`https://drive.google.com/uc?export=view&id=${mainPhoto}`} alt={applicationTitle}/>
                <Card.Body>
                <Card.Title>{applicationTitle}</Card.Title>
                    <Card.Subtitle>{description}</Card.Subtitle>
                </Card.Body>
                <Card.Footer>
                    <Row xs={2}>
                        <Col xs={8} sm={8} md={6} lg={8} xl={9}>
                            <Button style={{marginTop: '1rem', paddingRight: '1rem'}} onClick={handleClickEvent}>
                            <Row xs={2} >
                                    <Col xs={2} >
                                        <ArrowLeftOutlined style={{ fontSize: 50 }} />
                                    </Col>
                                    <Col style={{ alignItems: 'center', marginTop: '.7rem' }} xs={10} >
                                        <Card.Title >
                                            Back To Apps
                                        </Card.Title>
                                    </Col>
                            </Row>
                            </Button>
                        </Col>
                        <Col xs={4} sm={4} md={6} lg={4} xl={3}>
                            <Nav style={{ justifyContent: 'space-evenly', fontSize: 35  }}>
                                <Nav.Link href={applicationLink} style={{ textDecoration: 'none', color: 'black' }} target='_blank' rel="noreferrer"><GlobalOutlined/></Nav.Link>
                                <Nav.Link href={github} style={{ textDecoration: 'none', color: 'black' }} target='_blank' rel="noreferrer"><GithubFilled/></Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Card.Footer>
            </Col>
        </Fragment>
    )
}

export default ApplicationProfile;