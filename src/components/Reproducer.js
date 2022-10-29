import React, { useEffect, useRef, useState } from "react";
import "../components/Reproducer.css";
import Album from "../image/stray_enhypink.png";
import music from "../helpers/music";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaRandom,
} from "react-icons/fa";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import List from "./List";
import toast, { Toaster } from "react-hot-toast";

export default function Reproducer() {
  const [playing, setPlaying] = useState("pause");
  const [index, setIndex] = useState(0);
  const [song, setSong] = useState(music[index]);
  const [list, setList] = useState(false);

  //Effect of the components
  useEffect(() => {
    setSong(music[index]);
    //console.log(elementAudio);
  }, [index]);

  //Reproducer
  const elementAudio = useRef();

  //Active menu

  const OpenMenu = () => {
    if (list) setList(false);
    else setList(true);
  };

  //Change music
  const NextMusic = () => {
    if (index === music.length - 1) setIndex(0);
    else setIndex(index + 1);
    setTimeout(() => elementAudio.current.play(), 100);
    setPlaying("play");
  };

  const handlePlaying = (e) => {
    if (playing === "play") {
      if (index === music.length - 1) setIndex(0);
      else setIndex(index + 1);
      setTimeout(() => elementAudio.current.play(), 100);
    }
  };

  const BackMusic = () => {
    if (index === 0) setIndex(music.length - 1);
    else setIndex(index - 1);
    setTimeout(() => elementAudio.current.play(), 100);
    setPlaying("play");
  };

  const RandomMusic = () => {
    let randomIndex = Math.floor(Math.random() * (music.length - 0) + 0);
    setIndex(randomIndex);
    //console.log(randomIndex);
    setTimeout(() => elementAudio.current.play(), 100);
    setPlaying("play");
  };

  //Methods for reproduce the music

  const PlayMusic = () => {
    //console.log(elementAudio);
    if (playing === "pause") {
      elementAudio.current.play();
      setPlaying("play");
    }
  };

  const PauseMusic = () => {
    if (playing === "play") {
      elementAudio.current.pause();
      setPlaying("pause");
    }
  };

  //Message

  const notify = () =>
    toast(
      `Feliz cumpleaños Tifany🎉✨! 
  Espero que disfrutes mucho en tu día. Nunca olvides la gran persona que eres. Sigue sonriendo!!
  Att: Stray Enhypink`,
      { duration: 5500 }
    );

  return (
    <>
      <div className="reproducer">
        {list === false ? (
          <div className="song">
            <img src={Album} alt="Album" onClick={notify} />
            <h3>{song.band}</h3>
            <p>{song.nameSong}</p>
          </div>
        ) : (
          <List
            music={music}
            setIndex={setIndex}
            elementAudio={elementAudio}
            setPlaying={setPlaying}
            index={index}
          />
        )}
        <audio
          src={song.url}
          ref={elementAudio}
          onPause={handlePlaying}
        ></audio>
        <div className="panel-buttons">
          <FaRandom className="btn-random" onClick={RandomMusic} />
          <FaAngleDoubleLeft className="btn" onClick={BackMusic} />
          {playing === "pause" ? (
            <AiFillPlayCircle className="btn" onClick={PlayMusic} />
          ) : (
            <AiFillPauseCircle className="btn" onClick={PauseMusic} />
          )}
          <FaAngleDoubleRight className="btn" onClick={NextMusic} />
          <GiHamburgerMenu className="btn-menu" onClick={OpenMenu} />
        </div>
      </div>
      <Toaster />
    </>
  );
}
