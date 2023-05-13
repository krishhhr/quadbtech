import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const ShowList = () => {
  const navigate = useNavigate();

  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchShows();
  }, []);

  const handleShowSummary = (e) => {
    navigate(`/summary/${e}`);
  };

  const fetchShows = async () => {
    try {
      const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
      setShows(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Show List</h1>
      <div className="row row-cols-1 row-cols-md-3">
        {shows.map((show) => (
          <div className="col mb-4" key={show.show.id}>
            <div className="card">
              {show.show.image && (
                <img src={show.show.image.medium} alt={show.show.name} className="card-img-top" />
              )}
              <div className="card-body">
                <h5 className="card-title">{show.show.name}</h5>
                <p className="card-text">Language: {show.show.language}</p>
                <p className="card-text">Runtime: {show.show.runtime}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleShowSummary(show.show.id)}
                >
                  Show Summary
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
