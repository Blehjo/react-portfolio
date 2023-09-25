import { Tab, Tabs} from 'react-bootstrap';
import { Card, Row, Col, Nav } from 'react-bootstrap';
import { ApplicationData } from './ApplicationData';
import { GithubFilled, GlobalOutlined} from '@ant-design/icons';
import TechStack from './TechStack';
import { GeneralContainer } from '../styles/styled.components';

const TabPages = () => {
    
    return (
        <Tabs
        defaultActiveKey="featured"
        variant='pills'
        id="justify-tab-example"
        className="mb-3"
        justify
        >
            <Tab eventKey="profile" title="Bio">
                <Card bg="dark" style={{ padding: '3rem'}}>   
                    Innovative software engineer with a background in public health databases who brings a unique perspective to frameworks for problem solving. Excels in troubleshooting issues with a high level of creativity to get results. <br></br><br></br>Effective at communication not only verbally but as an active listener. Also, utilizes an agile management style to optimize project management. In addition, uses time management to achieve goals and keep on task to hit deadlines.
                </Card>
            </Tab>
            <Tab eventKey="featured" title="Featured Applications">
                {Array.from(ApplicationData).map(({ id, applicationTitle, mainPhoto, description, applicationImage, applicationLink, github }) => (
                    <Card style={{ alignItems: 'center', padding: '.5rem'}} className='mb-4' bg="dark">
                    <Col key={id} style={{ height: '180' }}>
                        <Row style={{ paddingTop: '1.2rem' }} md={1} lg={2} xl={2}>
                            <Col lg={6} xl={6}>
                            <Card.Img height='200' style={{ marginBottom: '1rem', objectFit:'cover', borderRadius: '.5rem' }} src={mainPhoto} alt={applicationTitle}/>
                            </Col>
                            <Col lg={6} xl={6}>
                                <Card.Body>
                                    <GeneralContainer href={`/application/${id}`}>
                                    <Card.Title style={{ marginBottom: '1rem' }}>{applicationTitle}</Card.Title> 
                                    </GeneralContainer>
                                    <Card.Text>{description}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Nav style={{ justifyContent: 'left', fontSize: 35 }}>
                                        <GeneralContainer style={{marginRight: '1rem'}} href={applicationLink} target='_blank' rel="noreferrer">
                                            <GlobalOutlined/>
                                        </GeneralContainer>
                                        <GeneralContainer href={github} target='_blank' rel="noreferrer">
                                            <GithubFilled/>
                                        </GeneralContainer>
                                    </Nav>
                                </Card.Footer>
                            </Col>
                        </Row>
                    </Col>
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