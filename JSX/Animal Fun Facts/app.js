import { animals } from './animals';
import React from 'react'
import ReactDOM from 'react-dom'


const title = "";

const background = (
    <img
        className='background'
        alt='ocean'
        src='/images/ocean.jpg'
    />
)

const images = [];

for (const animal in animals) {
    images.push(
        <img
            key={animal}
            className='animal'
            alt={animal}
            src={animals[animal].image}
            arialabel={animal}
            role='button'
        />
    )
}


const animalFacts = (
    <div>
        <h1>
            {title == "" ? "Click an animal for a fun       fact" : title}
        </h1>
        {background}
        <div className='animals'>
            {images}
        </div>
    </div>
);

ReactDOM.render(animalFacts, document.getElementById("root"));


