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
            <Card>
                <Card.Img style={{ objectFit:'cover'}} src={`https://drive.google.com/uc?export=view&id=${mainPhoto}`} alt={applicationTitle}/>
                <Card.Body>
                <Card.Title>{applicationTitle}</Card.Title>
                    <Card.Subtitle>{description}</Card.Subtitle>
                </Card.Body>
                <Card.Footer>
                    <Nav style={{ justifyContent: 'space-evenly', fontSize: 35, }}>
                        <Nav.Link href={applicationLink} target='_blank' rel="noreferrer"><GlobalOutlined/></Nav.Link>
                        <Nav.Link href={github} target='_blank' rel="noreferrer"><GithubFilled/></Nav.Link>
                    </Nav>
                </Card.Footer>
            </Card>
            <Fragment>
                    <Button style={{margin: '1rem', paddingRight: '1rem'}} onClick={handleClickEvent}>
                <Row xs={2} sm={2} md={2} lg={2} xl={2}>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                            <ArrowLeftOutlined style={{ fontSize: 50 }} />
                        </Col>
                        <Col style={{ alignItems: 'center' }} xs={10} sm={10} md={10} lg={10} xl={10}>
                            <Card.Title >
                                Back To Apps
                            </Card.Title>
                        </Col>
                </Row>
                    </Button>
            </Fragment>
        </Fragment>
    )
}

export default ApplicationProfile;