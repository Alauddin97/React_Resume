import React from "react";
import './css/slideshow.css';
import { Slide } from 'react-slideshow-image';
import slide2 from './image/slide2.jpg';
import slide1 from './image/slide1.jpg';
import slide0 from './image/slide0.jpeg';
 
const slideImages = [ slide0, slide1,slide2];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`,'background-size':'100% 100%','backgroundRepeat':'no-repeat'}}>
              <span><b>Hacktober Fest</b></span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`,'background-size':'100% 100%','backgroundRepeat':'no-repeat'}}>
              <span><b>Access 1.0 Training Session</b></span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`,'background-size':'100% 100%','backgroundRepeat':'no-repeat'}}>
              <span>Sunset View</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;