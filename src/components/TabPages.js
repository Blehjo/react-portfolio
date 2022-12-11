import { Tab, Tabs} from 'react-bootstrap';
import { Card, Row, Col } from 'react-bootstrap';
import { ApplicationData } from './ApplicationData';
import ContactForm from './ContactForm';
import { GithubFilled, GlobalOutlined} from '@ant-design/icons';

import PolariCard from './PolariCard';

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
                    My name is Bleh Seton and although I was born in Chicago, my family is from Guinea and Liberia. University of Illinois at Chicago is my alma mater, but I spent half my academic career between Germany and Austria. When I am not at work you can catch me playing video games, painting on whatever I can find, and rating a new restaurant.<br></br><br></br>Currently, I work in public health as a resource navigator. I decided to venture into web development during the pandemic.  My current job requires navigating the web in order to learn about organizations that offer resources to individuals and families in neighborhoods that do not have access to basic necessities. After being apart of seminars and using sites with a catalogue of organizations, I learned that a lot of the sites are difficult to navigate and aren't reliable. From there, I decided that I wanted to understand the ins and outs of programming to solve these problems. 
                </Card>
            </Tab>
            <Tab eventKey="applications" title="Applications">
                {Array.from(ApplicationData).map(({ id, applicationTitle, mainPhoto, description, applicationImage, applicationLink, github }) => (
                    <>
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
                    </>
                ))}
            </Tab>
            <Tab eventKey="longer-tab" title="Loooonger Tab">
            Goodmorning
            </Tab>
            <Tab eventKey="contact" title="Contact">
                <ContactForm />
            </Tab>
        </Tabs>
    );
}

export default TabPages;