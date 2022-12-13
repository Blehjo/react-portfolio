import { Fragment, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Nav } from "react-bootstrap";

import { GithubFilled, PlayCircleFilled, ArrowLeftOutlined } from "@ant-design/icons";

import { ApplicationData } from "./ApplicationData";

const ApplicationProfile = () => {
    const navigate = useNavigate();
    const [information, setInformation] = useState([]);
    const { id } = useParams();
    const applications = ApplicationData;
    
    const getApplication = () => {
        const app = applications.find((element) => element.id == id);
        setInformation(app);
    }

    const handleClickEvent = () => {
        navigate('/portfolio')
    }

    useEffect(() => {
        getApplication();
    }, [id]);

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
                        <Nav.Link href={applicationLink} target='_blank' rel="noreferrer"><PlayCircleFilled/></Nav.Link>
                        <Nav.Link href={github} target='_blank' rel="noreferrer"><GithubFilled/></Nav.Link>
                    </Nav>
                </Card.Footer>
            </Card>
            <Fragment>
                <Button style={{margin: '1rem'}} onClick={handleClickEvent}>
                <ArrowLeftOutlined/>
                {`    Back To Apps`}
                </Button>
            </Fragment>
        </Fragment>
    )
}

export default ApplicationProfile;