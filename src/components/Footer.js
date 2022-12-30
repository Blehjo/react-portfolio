import React from 'react';
import { LinkedinFilled, GithubFilled, MailFilled, } from '@ant-design/icons'

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
                <li><a style={{ textDecoration: 'none', color: 'black' }} target="_blank" rel="noreferrer" href='https://github.com/Blehjo'><GithubFilled /></a></li>
                <li><a style={{ textDecoration: 'none', color: 'black' }} target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/bleh-s/'><LinkedinFilled /></a></li>
                <li><a style={{ textDecoration: 'none', color: 'black' }} href='mailto:blehjooo@gmail.com'><MailFilled /></a></li>
            </ul>
        </div>
    )
}