import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  const navHandle = () => {
    navigate('/home');
  };
  return (
    <>
      <div className="container">
        <h2>Lone_Button</h2>
      </div>
      <div className="container-castom">
        <span className="front">
          <div onClick={navHandle} className="pixel2" style={{marginTop: '50%'}}>
            START
          </div>
        </span>
      </div>
    </>

  );
}
