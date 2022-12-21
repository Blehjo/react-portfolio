import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

export default function Skills() {
  return (
    <Fragment>
      <Row xs={1} sm={1} md={1} lg={2} xl={2}>
        <Col>
          <Card style={{ marginBottom: '1rem'}}>
            <Card.Title style={{ textAlign: 'center', margin: '.5rem'}}>Front-End</Card.Title>
            <Card.Body>
              <Row style={{ marginBottom: '1rem' }}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img alt="React.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
                </Col>
                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Card.Title style={{ position: 'absolute', bottom: '0' }}>React.js</Card.Title>
                </Col>
              </Row>
              <Row style={{ marginBottom: '1rem' }}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img alt="JSX" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                </Col>
                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Card.Title style={{ position: 'absolute', bottom: '0' }}>JSX</Card.Title>
                </Col>
              </Row>
              <Row style={{ marginBottom: '1rem' }}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img alt="Javascript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                </Col>
                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Card.Title style={{ position: 'absolute', bottom: '0' }}>Javascript</Card.Title>
                </Col>
              </Row>
              <Row style={{ marginBottom: '1rem' }}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img alt="CSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                </Col>
                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Card.Title style={{ position: 'absolute', bottom: '0' }}>CSS</Card.Title>
                </Col>
              </Row>
              <Row style={{ marginBottom: '1rem' }}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img alt="SASS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
                </Col>
                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Card.Title style={{ position: 'absolute', bottom: '0' }}>SASS</Card.Title>
                </Col>
              </Row>
              <Row style={{ marginBottom: '1rem' }}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img alt="HTML5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                </Col>
                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Card.Title style={{ position: 'absolute', bottom: '0' }}>HTML5</Card.Title>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ marginBottom: '1rem'}}>
            <Card.Title style={{ textAlign: 'center', margin: '.5rem'}}>Back-End</Card.Title>
            <Card.Body>
              <Row style={{ marginBottom: '1rem' }}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img alt="C#" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"/>
                </Col>
                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Card.Title style={{ position: 'absolute', bottom: '0' }}>C#</Card.Title>
                </Col>
              </Row>
              <Row style={{ marginBottom: '1rem' }}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img alt="Node.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                </Col>
                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Card.Title style={{ position: 'absolute', bottom: '0' }}>Node.js</Card.Title>
                </Col>
              </Row>
              <Row style={{ marginBottom: '1rem' }}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img alt="Express.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                </Col>
                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Card.Title style={{ position: 'absolute', bottom: '0' }}>Express.js</Card.Title>
                </Col>
              </Row>
              <Row style={{ marginBottom: '1rem' }}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img alt="Golang" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" />
                </Col>
                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Card.Title style={{ position: 'absolute', bottom: '0' }}>Golang</Card.Title>
                </Col>
              </Row>
              <Row style={{ marginBottom: '1rem' }}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img alt="Linux" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
                </Col>
                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Card.Title style={{ position: 'absolute', bottom: '0' }}>Linux</Card.Title>
                </Col>
              </Row>
              <Row style={{ marginBottom: '1rem' }}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img alt="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                </Col>
                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Card.Title style={{ position: 'absolute', bottom: '0' }}>Git</Card.Title>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ marginBottom: '1rem'}}>
            <Card.Title style={{ textAlign: 'center', margin: '.5rem'}}>Databases</Card.Title>
            <Card.Body>
              <Row style={{ marginBottom: '1rem' }}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img alt="MySQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                </Col>
                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Card.Title style={{ position: 'absolute', bottom: '0' }}>MySQL</Card.Title>
                </Col>
              </Row>
              <Row style={{ marginBottom: '1rem' }}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img alt="SQLite" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg" />
                </Col>
                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Card.Title style={{ position: 'absolute', bottom: '0' }}>SQLite</Card.Title>
                </Col>
              </Row>
              <Row style={{ marginBottom: '1rem' }}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img alt="MongoDB" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
                </Col>
                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Card.Title style={{ position: 'absolute', bottom: '0' }}>MongoDB</Card.Title>
                </Col>
              </Row>
              <Row style={{ marginBottom: '1rem' }}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img alt="Apollo GraphQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" />
                </Col>
                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Card.Title style={{ position: 'absolute', bottom: '0' }}>Apollo GraphQL</Card.Title>
                </Col>
              </Row>
              <Row style={{ marginBottom: '1rem' }}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img alt="AWS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" />
                </Col>
                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Card.Title style={{ position: 'absolute', bottom: '0' }}>AWS</Card.Title>
                </Col>
              </Row>
              <Row style={{ marginBottom: '1rem' }}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img alt="Salesforce" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" />
                </Col>
                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Card.Title style={{ position: 'absolute', bottom: '0' }}>Salesforce</Card.Title>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ marginBottom: '1rem'}}>
            <Card.Title style={{ textAlign: 'center', margin: '.5rem'}}>Tools</Card.Title>
            <Card.Body>
              <Row style={{ marginBottom: '1rem' }}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img alt="Visual Studio" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" />
                </Col>
                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Card.Title style={{ position: 'absolute', bottom: '0' }}>Visual Studio</Card.Title>
                </Col>
              </Row>
              <Row style={{ marginBottom: '1rem' }}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img alt="Studio Code" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                </Col>
                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Card.Title style={{ position: 'absolute', bottom: '0' }}>Visual Studio Code</Card.Title>
                </Col>
              </Row>
              <Row style={{ marginBottom: '1rem' }}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img alt=".NET" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"/>
                </Col>
                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Card.Title style={{ position: 'absolute', bottom: '0' }}>.NET</Card.Title>
                </Col>
              </Row>
              <Row style={{ marginBottom: '1rem' }}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img alt="Azure" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" />
                </Col>
                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Card.Title style={{ position: 'absolute', bottom: '0' }}>Azure</Card.Title>
                </Col>
              </Row>
              <Row style={{ marginBottom: '1rem' }}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img alt="Bootstrap" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                </Col>
                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Card.Title style={{ position: 'absolute', bottom: '0' }}>Bootstrap</Card.Title>
                </Col>
              </Row>
              <Row style={{ marginBottom: '1rem' }}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img alt="Xcode" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg" />
                </Col>
                <Col style={{ position: 'relative' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Card.Title style={{ position: 'absolute', bottom: '0' }}>Xcode</Card.Title>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
        <p><a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1eQh9PvQWSuX5sCxs8_-zjOkuwpYO6KLz/view?usp=sharing">Link To Resume</a></p>
      <Outlet/>
    </Fragment>
  );
}