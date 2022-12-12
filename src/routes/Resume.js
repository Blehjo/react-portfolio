import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Skills from '../components/Skills';
import Education from '../components/Education';

export default function Resume() {
  return (
    <Tabs
    defaultActiveKey="programming"
    id="justify-tab-example"
    className="mb-3"
    justify
    >
        <Tab eventKey="programming" title="Programming">
            <Skills/>
        </Tab>
        <Tab eventKey="education" title="Education">
            <Education/>
        </Tab>
    </Tabs>
  );
}