import React from 'react';

export default function Application({ title, images, index }) {
    return (
        <div>
            {images.map((image) => {
                return <img key={index} alt={title} src={require(image)}/>
            })}
        </div>
    )
}