import React from 'react';

export default function Application({ title, images, index }) {
    console.log(images)
    return (
        <div>
            {images.map((image) => {
                return <img key={index} alt={title} src={require(`/Users/blehjo/bootcamp/homework/react-portfolio/src/assets/${image}.png`)} width='200' height='auto'/>
            })}
        </div>
    )
}

// /Users/blehjo/bootcamp/homework/react-portfolio/src/assets/gameJunkeePhotos/gamejunkee1.png