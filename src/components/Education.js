import { Fragment } from "react"
import { Card, Row, Col } from "react-bootstrap"

const Education = () => {
    const education = [
        {
            id: 1,
            name: "Northwestern University",
            city: "Chicago, Illinois",
            description: "Full-Stack Web Development | Software Engineering",
            year: "2019"
        },
        {
            id: 2,
            name: "University of Illinois at Chicago",
            city: "Chicago, Illinois",
            description: "Finance | College of Business Administration",
            year: "2011 - 2016"
        },
        {
            id: 3,
            name: "Wirtschaftsuniversitaet Wien",
            city: "Vienna, Austria",
            description: "Economics/ Business | International Economics",
            year: "2015 - 2016"
        },
        {
            id: 4,
            name: "Humboldt Universitaet zu Berlin",
            city: "Berlin, Germany",
            description: "Economics | International Economics",
            year: "2014 - 2015"
        },
    ]
    return (
        <Fragment>
            {education.map(({ id, name, city, year, description }) => (
                <Row style={{ marginBottom: '1rem'}} key={id}>
                    <Col>
                        <Card>
                            <Card.Title style={{ margin: '.5rem'}}>{name}</Card.Title>
                            <Card.Body>
                                {/* <Card.Subtitle>{city}</Card.Subtitle> */}
                                <Card.Text>{description}</Card.Text>
                            </Card.Body>
                            <Card.Footer>{city} | {year}</Card.Footer>
                        </Card>
                    </Col>
                </Row>
            ))}
            <p><a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1tY07qylX8C-UOeua_pUEYZ_uVw7KKIKO/view?usp=share_link">Link To Resume</a></p>
      </Fragment>
    )
}

export default Education;