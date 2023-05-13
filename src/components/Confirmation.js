import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
  useEffect(() => {
    // Clear local storage if needed
    localStorage.removeItem('movieName');
    localStorage.removeItem('movieDetails');
  }, []);

  return (
    <div className="container">
      <h1 className="mt-5">Booking Confirmation</h1>
      <p className="lead">Thank you for booking your ticket!</p>
      <p>Your booking has been confirmed.</p>
      <Link to="/"><button className="btn btn-primary">Back to Home</button></Link>
    </div>
  );
};

export default ConfirmationPage;
