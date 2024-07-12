// components/AudioPlayer.js
import React, { useEffect, useRef, useState } from 'react';
import { TbMusic, TbMusicOff } from "react-icons/tb";
const AudioPlayer = ({ src, className }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
    console.log("isPlaying",isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef}>
        <source src={src} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={togglePlay} className={className} >
        {isPlaying ?  <TbMusic className='text-3xl text-white'/> : <TbMusicOff className='text-3xl text-white'/>} 
      </button>
    </div>
  );
};

export default AudioPlayer;
