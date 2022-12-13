import { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

import { GithubFilled, PlayCircleFilled } from "@ant-design/icons";

import { ApplicationData } from "./ApplicationData";

const ApplicationProfile = () => {
    const [information, setInformation] = useState([]);
    const { id } = useParams();
    const applications = ApplicationData;
    
    const getApplication = () => {
        const app = applications.find((element) => element.id == id);
        applications.map((element) => console.log(`${element.applicationTitle}: ${element.id}`))
        setInformation(app);
        console.log("information variable: ", information);
        console.log("applications variable:", applications);
        console.log("id: ", id);
        console.log("found item: ", app);
    }

    useEffect(() => {
        // evt.preventDefault();
        getApplication();
    }, [id]);

    const { applicationTitle, mainPhoto, applicationLink, github, description } = information;

    return (
        <Fragment>
            <Card>
                <Card.Title>{applicationTitle}</Card.Title>
                <Card.Img src={`https://drive.google.com/uc?export=view&id=${mainPhoto}`} alt={applicationTitle}/>
                <Card.Body>
                    <Card.Subtitle>{description}</Card.Subtitle>
                </Card.Body>
                <Card.Footer>
                        <Card.Link href={applicationLink} target='_blank' rel="noreferrer"><PlayCircleFilled/></Card.Link>
                        <Card.Link href={github} target='_blank' rel="noreferrer"><GithubFilled/></Card.Link>
                </Card.Footer>
            </Card>
        </Fragment>
    )
}

export default ApplicationProfile;