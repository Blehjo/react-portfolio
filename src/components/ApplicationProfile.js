import { Fragment, useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { polariArr } from "../assets/polariPhotos/polariData";

import { ApplicationContext } from "../contexts/application.context";

import { GithubFilled, PlayCircleFilled } from "@ant-design/icons";


import { ApplicationData } from "./ApplicationData";

const ApplicationProfile = () => {
    // const { application } = useContext(ApplicationContext);
    // const [object, setObject] = useState(null);
    
    // const getObject = () => {
    //     setObject(application);
    // }

    // useEffect(() => {
    //     getObject();
    // }, []);

    const [information, setInformation] = useState(ApplicationData);

    const shellGeist =  { id: 8, applicationTitle: "Shell Geist", mainPhoto: "1ozJzaJn_poc5zFq-ucwsYOTh3QV-mb6F", description: "Think of Shell Geist as a virtual meetup. You can attend events by getting a code and joining video game lobbies, joining live discussions, and leaving your own feed back from first-hand experience.", applicationImage: "polariArr", applicationLink: "https://shellgeist.com/", github: "https://github.com/Blehjo/shell-geist" };

    // const { applicationTitle, mainPhoto, applicationLink, github, description } = object;

    return (
        <Fragment>
            <Card>
                <Card.Title>{shellGeist.applicationTitle}</Card.Title>
                <Card.Img src={`https://drive.google.com/uc?export=view&id=${shellGeist.mainPhoto}`} alt={shellGeist.applicationTitle}/>
                <Card.Body>
                    <Card.Subtitle>{shellGeist.description}</Card.Subtitle>
                </Card.Body>
                <Card.Footer>
                        <Card.Link href={shellGeist.applicationLink} target='_blank' rel="noreferrer"><PlayCircleFilled/></Card.Link>
                        <Card.Link href={shellGeist.github} target='_blank' rel="noreferrer"><GithubFilled/></Card.Link>
                </Card.Footer>
            </Card>
        </Fragment>
    )
}

export default ApplicationProfile;