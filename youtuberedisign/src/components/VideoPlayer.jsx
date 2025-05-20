import { useRef, useState, useEffect } from "react";
import videoFile from "../assets/video.mp4";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    video.addEventListener("loadedmetadata", () => setDuration(video.duration));
    video.addEventListener("timeupdate", () =>
      setCurrentTime(video.currentTime)
    );

    return () => {
      video.removeEventListener("loadedmetadata", () => {});
      video.removeEventListener("timeupdate", () => {});
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="video-player">
      <div className="video-container">
        <video ref={videoRef} src={videoFile} className="video-element" />

        <div className="video-controls">
          <button className="play-button" onClick={togglePlay}>
            <i className={`fas ${isPlaying ? "fa-pause" : "fa-play"}`}></i>
          </button>

          <div className="time-controls">
            <span>{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={(e) => {
                const time = parseFloat(e.target.value);
                videoRef.current.currentTime = time;
                setCurrentTime(time);
              }}
            />
            <span>{formatTime(duration)}</span>
          </div>

          <button className="fullscreen-button">
            <i className="fas fa-expand"></i>
          </button>
        </div>
      </div>

      <div className="video-info">
        <h1 className="video-title">Some Video Name</h1>
        <div className="video-stats">
          <span>123,456 views • 15 may 2025</span>
        </div>
      </div>
    </div>
  );
}
