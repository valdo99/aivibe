import { useState, useEffect } from "react";
import axios from "axios";

export const Lyrics = () => {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [text, setText] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const searchLyrics = () => {
    setLoading(true);
    axios
      .get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
      .then((res) => {
        setLoading(false);
        setText(res.data.lyrics);
      })
      .catch((err) => {
        setLoading(false);
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
          className="artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        ></input>

        <input value={song} onChange={(e) => setSong(e.target.value)}></input>
      </div>
      {loading && (
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
      )}
      {!loading && (
        <button className="load" onClick={searchLyrics}>
          LOAD LYRICS
        </button>
      )}
      {text && (
        <>
          {" "}
          <div className="lyricsText">
            {open ? text : text.slice(0, 500)}
          </div>{" "}
          <button className="load" onClick={() => setOpen((prev) => !prev)}>
            {" "}
            EXPAND{" "}
          </button>
          <span className="button-between"></span>
          <button className="load" onClick={sentiment}>
            {" "}
            ANALIZE LYRICS{" "}
          </button>
        </>
      )}
    </>
  );
};
