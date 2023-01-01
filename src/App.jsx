import React, { useState } from 'react';
import './App.css';

function Picture(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <img src={props.url} width={props.size}></img>
    </>
  );
}

export default function App() {
  const [inputs, setInputs] = useState({ title: '', size: '', link: '' });

  const handleTitle = event => {
    setInputs({ title: event.target.value, size: inputs.size, link: inputs.link });
  }

  const handleSize = event => {
    setInputs({ title: inputs.title, size: event.target.value, link: inputs.link });
  }

  const handleLink = event => {
    setInputs({ title: inputs.title, size: inputs.size, link: event.target.value });
  }

  return (
    <>
      < div className="inputs" >
        <input type="text" placeholder="Image Title" id="title" onChange={handleTitle} />
        <input type="text" placeholder="Image Size" id="size" onChange={handleSize} />
        <input type="text" placeholder="Image Link" id="link" onChange={handleLink} />
      </div >
      <div className="image">
        <Picture name={inputs.title} url={inputs.link} size={inputs.size} />
      </div>
    </>
  );
}