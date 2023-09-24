import { Fragment, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Nav, Row, Col } from "react-bootstrap";

import { GithubFilled, GlobalOutlined, ArrowLeftOutlined } from "@ant-design/icons";

import { ApplicationData } from "./ApplicationData";
import { GeneralContainer } from "../styles/styled.components";

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

    const { applicationTitle, mainPhoto, applicationLink, github, description, applicationImage } = information;

    // const pagination = {
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //       return '<span class="' + className + '">' + (index + 1) + '</span>';
    //     },
    // };

    return (
        <Fragment>
            <Col>
                <Card.Img style={{ objectFit:'cover', borderRadius: '.5rem', marginBottom: '1rem' }} src={mainPhoto} alt={applicationTitle}/>
                <Card.Body>
                <Card.Title style={{ marginBottom: '1rem' }}>{applicationTitle}</Card.Title>
                <Card.Subtitle>{description}</Card.Subtitle>
                </Card.Body>
                <Card.Footer>
                    <Row xs={2}>
                        <Col xs={8} sm={8} md={6} lg={8} xl={9}>
                            <Button variant="dark" style={{ marginTop: '1rem', paddingRight: '1rem', width: '100%' }} onClick={handleClickEvent}>
                            <Row xs={2} >
                                <Col xs={2} >
                                    <ArrowLeftOutlined style={{ fontSize: 50 }} />
                                </Col>
                                <Col style={{textAlign: 'center', marginTop: '.7rem' }} xs={10} >
                                    <Card.Title >
                                        Back To Apps
                                    </Card.Title>
                                </Col>
                            </Row>
                            </Button>
                        </Col>
                        <Col xs={4} sm={4} md={6} lg={4} xl={3}>
                            <Nav style={{ justifyContent: 'space-evenly', fontSize: 35  }}>
                                <GeneralContainer href={applicationLink} target='_blank' rel="noreferrer"><GlobalOutlined/></GeneralContainer>
                                <GeneralContainer href={github} target='_blank' rel="noreferrer"><GithubFilled/></GeneralContainer>
                            </Nav>
                        </Col>
                    </Row>
                </Card.Footer>
            </Col>
        </Fragment>
    )
}

export default ApplicationProfile;