import { Tab, Tabs} from 'react-bootstrap';

const TabPages = () => {
    return (
        <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
        >
            <Tab eventKey="home" title="Home">
            Hello
            </Tab>
            <Tab eventKey="profile" title="Profile">
            Bye
            </Tab>
            <Tab eventKey="longer-tab" title="Loooonger Tab">
            Goodmorning
            </Tab>
            <Tab eventKey="contact" title="Contact">
            Good Evening
            </Tab>
        </Tabs>
    );
}

export default TabPages;