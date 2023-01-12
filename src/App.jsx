import React, { useState } from 'react';
import './index.css';

function Picture(props) {
  return (
    <>
      <h1 style={{ fontSize: props.titleSize + 'px' }}>{props.name}</h1>
      <img src={props.url} width={props.imageSize}></img>
    </>
  );
}

export default function App() {
  const [inputs, setInputs] = useState({ title: '', titleSize: 50, link: '', imageSize: 50, });

  const handleTitle = event => {
    setInputs({ title: event.target.value, titleSize: inputs.titleSize, imageSize: inputs.imageSize, link: inputs.link });
  }

  const handleImageSize = event => {
    setInputs({ title: inputs.title, titleSize: inputs.titleSize, imageSize: event.target.value, link: inputs.link });
  }

  const handleTitleSize = event => {
    setInputs({ title: inputs.title, titleSize: event.target.value, imageSize: inputs.imageSize, link: inputs.link });
  }

  const handleLink = event => {
    setInputs({ title: inputs.title, titleSize: inputs.titleSize, imageSize: inputs.imageSize, link: event.target.value });
  }

  return (
    <>
      <div>
        <div>
          <input type="text" placeholder="Image Title" id="title" onChange={handleTitle} />
          <input type="range" min="0" max="100" placeholder="Title Size" id="titleSize" onChange={handleTitleSize} />
        </div>
        <div>
          <input type="text" placeholder="Image Link" id="link" onChange={handleLink} />
          <input type="range" min="0" max="500" placeholder="Image Size" id="imageSize" onChange={handleImageSize} />
        </div>
      </div>
      <div>
        <Picture name={inputs.title} url={inputs.link} titleSize={inputs.titleSize} imageSize={inputs.imageSize} />
      </div>
    </>
  );
}