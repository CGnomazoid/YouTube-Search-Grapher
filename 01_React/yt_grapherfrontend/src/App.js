import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyBXKu5PMUUl3BIkZASPwpSUxkTncXZl9yQ';
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const MAX_RESULTS = 50;

const searchPlaylistVideos = async (playlistId, searchTerm) => {
  const userParams = {
    part: 'snippet',
    playlistId,
    maxResults: MAX_RESULTS,
    key: API_KEY,
  };

  const res = await axios.get(BASE_URL, { params: userParams });
  const data = res.data;

  let frequency = 0;

  for (const item of data.items) {
    const title = item.snippet.title;
    const videoId = item.snippet.resourceId.videoId;
    const videoUrl = `https://youtube.com/watch?v=${videoId}`;
    if (title.toLowerCase().includes(searchTerm.toLowerCase())) {
      frequency += 1;
    }
  }

  return frequency;
};

function MyComponent() {
  const [frequency, setFrequency] = useState(0);

  const handleClick = async () => {
    const result = await searchPlaylistVideos('PLoSWVnSA9vG9qV0CVCpg5WwEy3LiP7udY', 'hunted');
    setFrequency(result);
  };

  return (
    <div>
      <button onClick={handleClick}>PRESS ME</button>
      <p>Frequency: {frequency}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {MyComponent()}
      </header>
    </div>
  );
}

export default App;
