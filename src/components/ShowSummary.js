import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

const ShowSummary = () => {
  const { showId } = useParams();
  const [summary, setSummary] = useState('');
  const [movie, setMovie] = useState('');
  const [runtime, setRuntime] = useState('');
  const [site, setSite] = useState('');

  const handleBookTicket = () => {
    const movieName = movie;
    const movieDetails = {
      site: site,
      duration: runtime,
    };

    // Save movie details to local storage
    localStorage.setItem('movieName', movieName);
    localStorage.setItem('movieDetails', JSON.stringify(movieDetails));

    // Redirect to the booking form page
    window.location.href = '/booking';
  };

  useEffect(() => {
    fetchShowSummary();
  }, []);

  const fetchShowSummary = async () => {
    try {
      const response = await axios.get(`https://api.tvmaze.com/shows/${showId}`);
      setSummary(response.data.summary);
      setMovie(response.data.name);
      setRuntime(response.data.runtime);
      setSite(response.data.officialSite);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Show Summary</h1>
      <div className="card">
        <div className="card-body">
        <div dangerouslySetInnerHTML={{ __html: summary }} />
          <button className="btn btn-primary" onClick={() => handleBookTicket()}>
            Book Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowSummary;
