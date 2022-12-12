import { Tab, Tabs} from 'react-bootstrap';
import { Card, Row, Col } from 'react-bootstrap';
import { ApplicationData } from './ApplicationData';
import { GithubFilled, GlobalOutlined} from '@ant-design/icons';
import TechStack from './TechStack';

const TabPages = () => {
    return (
        <Tabs
        defaultActiveKey="applications"
        id="justify-tab-example"
        className="mb-3"
        justify
        >
            <Tab eventKey="profile" title="Bio">
                <Card style={{ padding: '3rem'}}>   
                    Innovative software engineer with a background in public health databases who brings a unique perspective to frameworks for problem solving. Excels in troubleshooting issues with a high level of creativity to get results. Effective at communication not only verbally but as an active listener. Also, utilizes an agile management style to optimize project management. In addition, uses time management to achieve goals and keep on task to hit deadlines.
                </Card>
            </Tab>
            <Tab eventKey="applications" title="Applications">
                {Array.from(ApplicationData).map(({ id, applicationTitle, mainPhoto, description, applicationImage, applicationLink, github }) => (
                    <Card style={{ margin: '1rem' }}>
                        <Row lg={2} xl={2}>
                            <Col lg={4} xl={4}>
                                {/* <Card.Img src={require(mainPhoto)}/> */}
                            </Col>
                            <Col lg={8} xl={8}>
                                <Card.Body>
                                    <Card.Title>{applicationTitle}</Card.Title> 
                                    <Card.Text>{description}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Card.Link href={github}><GithubFilled /></Card.Link>
                                    <Card.Link href={applicationLink}><GlobalOutlined/></Card.Link>
                                </Card.Footer>
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