import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import { polariData } from "./images/polariData";

const PolariCard = () => {
    const [pictures, setPictures] = useState({});

    const getPolariPictures = () => {
        setPictures(polariData)
    }

    useEffect(() => {
        getPolariPictures();
    }, []);

    const { id, applicationTitle, applicationImage, applicationLink, github, applicationDescription } = pictures;

    return (
        <Fragment>
            <Card>
                <Row lg={2} xl={2}>
                    <Col lg={4} xl={4}>
                        <Card.Img src={require("../assets/polariPhotos/polari1.png")}/>
                    </Col>
                    <Col lg={8} xl={8}>
                        <Card.Body>
                            <Card.Title>{applicationTitle}</Card.Title> 
                            <Card.Subtitle>{applicationDescription}</Card.Subtitle>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Fragment>
    )
}

export default PolariCard;