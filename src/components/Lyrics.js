import { useState, useEffect } from "react";
import axios from "axios";

export const Lyrics = () => {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [text, setText] = useState();
  const [open,setOpen] = useState(false);
  const searchLyrics = () => {
    axios
      .get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
      .then((res) => {
        setText(res.data.lyrics);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const sentiment = () => {
    axios
      .post(
        `https://sentim-api.herokuapp.com/api/v1/`,
        { text: text },
        { Accept: "application/json", "Content-Type": "application/json" }
      )
      .then((res) => {
        alert(res.data.result.type);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <div className="lyrics">
        <input
          style={{ marginBottom: "5%" }}
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        ></input>

        <input
          value={song}
          onChange={(e) => setSong(e.target.value)}
        ></input>
      </div>
        <button className="load" onClick={searchLyrics}>LOAD LYRICS</button>
      {text && (
        <>
          {" "}
          <div className="lyricsText">
              {open ? text : text.slice(0,500)}
            </div>{" "}
            <button onClick={() => setOpen(prev=>!prev)}> expand </button>
            <button onClick={sentiment}>Analyze Lyrics</button>
        </>
      )}
    </>
  );
};
