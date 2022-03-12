import React from 'react';

export default function Application({ title, images, index }) {
    console.log(images)
    return (
        <div>
            {images.map((image) => {
                return <img key={index} alt={title} src={require(image.photo)} width='200' height='200'/>
            })}
        </div>
    )
}