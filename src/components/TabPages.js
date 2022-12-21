import { Tab, Tabs} from 'react-bootstrap';
import { Card, Row, Col, Nav } from 'react-bootstrap';
import { ApplicationData } from './ApplicationData';
import { GithubFilled, GlobalOutlined} from '@ant-design/icons';
import TechStack from './TechStack';

const TabPages = () => {
    return (
        <Tabs
        defaultActiveKey="featured"
        id="justify-tab-example"
        className="mb-3"
        justify
        >
            <Tab eventKey="profile" title="Bio">
                <Card style={{ padding: '3rem'}}>   
                    Innovative software engineer with a background in public health databases who brings a unique perspective to frameworks for problem solving. Excels in troubleshooting issues with a high level of creativity to get results. <br></br><br></br>Effective at communication not only verbally but as an active listener. Also, utilizes an agile management style to optimize project management. In addition, uses time management to achieve goals and keep on task to hit deadlines.
                </Card>
            </Tab>
            <Tab eventKey="featured" title="Featured Applications">
                {Array.from(ApplicationData).map(({ id, applicationTitle, mainPhoto, description, applicationImage, applicationLink, github }) => (
                    <Card key={id} style={{ height: '180', margin: '1rem' }}>
                        <Row md={1} lg={2} xl={2}>
                            <Col lg={6} xl={6}>
                            <Card.Img height='200' style={{ objectFit:'cover'}} src={`https://drive.google.com/uc?export=view&id=${mainPhoto}`} alt={applicationTitle}/>
                                <Card.Footer>
                                    <Nav style={{ justifyContent: 'space-evenly', fontSize: 35, }}>
                                        <Nav.Link href={applicationLink} target='_blank' rel="noreferrer"><GlobalOutlined/></Nav.Link>
                                        <Nav.Link href={github} target='_blank' rel="noreferrer"><GithubFilled/></Nav.Link>
                                    </Nav>
                                </Card.Footer>
                            </Col>
                            <Col lg={6} xl={6}>
                                <Card.Body>
                                    <Card.Title>{applicationTitle}</Card.Title> 
                                    <Card.Text>{description}</Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                ))}
            </Tab>
            <Tab eventKey="longer-tab" title="Tech Stack">
                <TechStack/>
            </Tab>
        </Tabs>
    );
}

export default TabPages;