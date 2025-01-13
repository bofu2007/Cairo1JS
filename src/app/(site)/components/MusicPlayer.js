"use client";

import ReactPlayer from "react-player";

export default function MusicPlayer() {
  return (
    <div style={{ marginTop: "2rem", textAlign: "center" }}>
      <h3>Enjoy Music</h3>
      <ReactPlayer
        url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        controls
        width="100%"
        height="50px"
      />
    </div>
  );
}
