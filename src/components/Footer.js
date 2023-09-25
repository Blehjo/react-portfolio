import React from 'react';
import { LinkedinFilled, GithubFilled, MailFilled, } from '@ant-design/icons'
import { GeneralContainer } from '../styles/styled.components';

const styles = {
    footer: {
        display: 'flex',
        flexDirection: 'row',
        
        marginBottom: '1rem'
    },
    margin: {
        display: 'flex',
        margin: 'auto',
        justifyContent: 'space-between',
        paddingBottom: '1rem',
        padding: '0rem 1rem 0rem 1rem',
        flexDirection: 'row',
        borderTop: 'solid gray'
    },
    icons: {
        marginLeft: '1rem',
        textDecoration: 'none',
        fontSize: '20px',
    }
}

export default function Footer () {
    return (
        <div style={styles.margin}>
            <div style={{ marginTop: '.3rem'}}>
                © 2023 Bleh Seton
            </div>
            {/* <ul style={styles.footer} className="nav nav-tabs"> */}
            <div style={styles.footer}>
                <div style={styles.icons}><GeneralContainer target="_blank" rel="noreferrer" href='https://github.com/Blehjo'><GithubFilled /></GeneralContainer></div>
                <div style={styles.icons}><GeneralContainer target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/bleh-s/'><LinkedinFilled /></GeneralContainer></div>
                <div style={styles.icons}><GeneralContainer href='mailto:blehjooo@gmail.com'><MailFilled /></GeneralContainer></div>
            </div>
            {/* </ul> */}
        </div>
    )
}