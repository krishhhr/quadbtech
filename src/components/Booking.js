import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Booking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Retrieve movie details from local storage
  const movieName = localStorage.getItem('movieName');
  const movieDetails = JSON.parse(localStorage.getItem('movieDetails'));

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Handle the ticket booking process using the entered user details and movie details
    // You can make an API call or perform any other required operations here

    // Clear local storage after booking
    localStorage.removeItem('movieName');
    localStorage.removeItem('movieDetails');

    // Display a success message or redirect to a confirmation page
    // For simplicity, we'll just display an alert
    alert(`Ticket booked for ${movieName}!\nName: ${name}\nEmail: ${email}`);

    // Redirect to another page after successful booking
    window.location.href = '/confirmation';
  };

  return (
    <div className="container">
      <h1 className="mt-5">Booking Form</h1>
      <div className="movie-details mt-4">
        <h2>Movie Details:</h2>
        <p><strong>Name:</strong> {movieName}</p>
        <p><strong>Site:</strong> <a href={movieDetails.site} target="_blank">{movieDetails.site}</a></p>
        <p><strong>Duration:</strong> {movieDetails.duration} minutes</p>
      </div>
      <form onSubmit={handleFormSubmit} className="mt-4">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Booking;
