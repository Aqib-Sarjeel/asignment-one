import React, { Component, Fragment,useState } from "react";

import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";



export default function Slidbar() {
  return (
    <Fragment>
      <Carousel>
        <div>
          <img
            src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"
            style={{ height: "500px" }}
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img
            src="https://static.toiimg.com/photo/72975551.cms"
            style={{ height: "500px" }}
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg"
            style={{ height: "500px" }}
          />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>

      <div className="row text-right">
        <div
          className="col-3 text-right"
          style={{ position: "fixed", bottom: "0px", right: "0px" }}
        >
          <img
            src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"
            
          />
        </div>
      </div>
    </Fragment>
  );
}
