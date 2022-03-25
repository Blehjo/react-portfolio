import React from 'react';

const styles = {
    image: {
        borderRadius: '5px'
    }
}


export default function ApplicationImages({ title, images, index }) {
    return (
        <div >
            {images.map((image) => {
                return <img style={styles.image} key={index} alt={title} src={require(`/Users/blehjo/bootcamp/homework/react-portfolio/src/assets/${image}.png`)} width='400' height='auto'/>
            })}
        </div>
    )
}
