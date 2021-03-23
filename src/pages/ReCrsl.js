import React from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.min.css";
import OneImg from "../images/1.jpg";
import TwoImg from "../images/2.jpg";
import ThreeImg from "../images/3.jpg";

const ReCrsl = () => {
  const [color, setColor] = React.useState("");
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img height="500px" src={OneImg} alt="img1" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height="500px" src={TwoImg} alt="img2" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height="500px" src={ThreeImg} alt="img3" />
        </Carousel.Item>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel>

      <div>
        <ReactPlayer
          className="rplayer"
          url="https://www.youtube.com/watch?v=4jf0Ho-1pdc"
        />
      </div>
    </div>
  );
};

export default ReCrsl;
