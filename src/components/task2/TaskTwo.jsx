// src/components/TaskTwo.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TaskTwo.css'; 

const TaskTwo = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/shows')
      .then(response => {
        setShows(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="task-two-container">
      <h1 className="task-two-title">TV Shows</h1>
      <div className="cards-container">
        {shows.map(show => (
          <div key={show.id} className="card">
            <h2>{show.name}</h2>
            <img src={show.image?.medium} alt={show.name} />
            <p>{show.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskTwo;
