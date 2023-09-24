import React from 'react';
import { LinkedinFilled, GithubFilled, MailFilled, } from '@ant-design/icons'
import { GeneralContainer } from '../styles/styled.components';

const styles = {
    footer: {
        justifyContent: 'space-evenly',
        fontSize: 75,
    },
    margin: {
        margin: 'auto',
    },
}

export default function Footer () {
    return (
        <div style={styles.margin}>
            <ul style={styles.footer} className="nav nav-tabs">
                <li><GeneralContainer target="_blank" rel="noreferrer" href='https://github.com/Blehjo'><GithubFilled /></GeneralContainer></li>
                <li><GeneralContainer target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/bleh-s/'><LinkedinFilled /></GeneralContainer></li>
                <li><GeneralContainer href='mailto:blehjooo@gmail.com'><MailFilled /></GeneralContainer></li>
            </ul>
        </div>
    )
}