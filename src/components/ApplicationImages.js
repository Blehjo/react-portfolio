import React from 'react';


export default function Application({ title, images, index }) {
    return (
        <div >
            {images.map((image) => {
                return <img key={index} alt={title} src={require(`/Users/blehjo/bootcamp/homework/react-portfolio/src/assets/${image}.png`)} width='400' height='auto'/>
            })}
        </div>
    )
}
