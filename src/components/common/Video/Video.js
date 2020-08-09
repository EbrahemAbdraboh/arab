import React from 'react';
import { Player } from 'video-react';
import './Video.scss';

const Video = props => {
  return(
    <Player
      playsInline
      poster={props.poster}
      src={props.videoURL}
    />

  );
};

export default Video;
