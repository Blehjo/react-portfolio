import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Skills from '../components/Skills';
import Education from '../components/Education';
import { TabContainer } from '../styles/styled.components';

export default function Resume() {
  return (
    <TabContainer>
    <Tabs
    defaultActiveKey="programming"
    id="justify-tab-example"
    className="mb-3 tabscolor"
    justify
    variant='pills'
    >
        <Tab eventKey="programming" title="Programming">
            <Skills/>
        </Tab>
        <Tab eventKey="education" title="Education">
            <Education/>
        </Tab>
    </Tabs>
    </TabContainer>
  );
}