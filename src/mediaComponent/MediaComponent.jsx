import React, { useState } from "react";
import "./mediaComponent.css";
const MediaComponent = () => {
  const [playState, handlePlayState] = useState(false);
    if(playState)document.getElementById('video').play()
  return (
    <div id="mediaContainer" onMouseOver={() => handlePlayState(true)}>
        <video
          id="video"
          width="320"
          height="240"
        >
          <source src="./video/video.mp4" type="video/mp4" />
        </video>
        <img
           width="320"
         
          id="picture"
          src="./pictures/image.png"
          alt="test for gay mark"
          className={playState ? "animate" : null}
        ></img>

    </div>
  );
};

export default MediaComponent;
