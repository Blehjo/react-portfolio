import React from 'react';

const styles = {
    footer: {
        justifyContent: 'space-evenly'
    }
}

export default function Footer () {
    return (
        <footer>
            <ul style={styles.footer} className="nav nav-tabs">
                <li>Email</li>
                <li>LinkedIn</li>
                <li>Github</li>
            </ul>
        </footer>
    )
}