import React from 'react';

export default function Application({ images }) {
    return (
        <div>
            {images.map((image, index) => {
                return <img key={index} src={image}/>
            })}
        </div>
    )
}