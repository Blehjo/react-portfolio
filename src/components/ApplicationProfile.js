import { Fragment, useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import { ApplicationContext } from "../contexts/application.context";

import { GithubFilled, PlayCircleFilled } from "@ant-design/icons";

const ApplicationProfile = () => {
    const { application } = useContext(ApplicationContext);
    const [object, setObject] = useState(null);
    
    const getObject = () => {
        setObject(application);
    }

    useEffect(() => {
        getObject();
    }, []);

    const { applicationTitle, mainPhoto, applicationLink, github, description } = object;

    return (
        <Fragment>
            <Card>
                <Card.Title>{applicationTitle}</Card.Title>
                <Card.Img src={require(mainPhoto)}/>
                <Card.Body>
                    <Card.Subtitle>{description}</Card.Subtitle>
                </Card.Body>
                <Card.Footer>
                    <ul>
                        <li><a href={applicationLink} target='_blank' rel="noreferrer"><PlayCircleFilled/></a></li>
                        <li><a href={github} target='_blank' rel="noreferrer"><GithubFilled/></a></li>
                    </ul>
                </Card.Footer>
            </Card>
        </Fragment>
    )
}

export default ApplicationProfile;