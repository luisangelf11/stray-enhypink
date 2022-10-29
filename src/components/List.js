import React from "react";
import "../components/List.css";

export default function List({ music, setIndex, elementAudio, setPlaying, index}) {
  const playSong = (id) => {
    setIndex(id);
    setTimeout(()=>elementAudio.current.play(), 100);
    setPlaying("play");
  };
  return (
    <div className="listSong">
      <h3 className="playlist">Playlist</h3>
      {music.map((el) => (
        <div key={el.id} className={`song-item ${index === el.id ? "playing" : ""}`} onClick={()=>playSong(el.id)}>
          <img src={el.photo} alt="album" className="icon" />
          <p>
            {el.band} ~ {el.nameSong}
          </p>
        </div>
      ))}
    </div>
  );
}
