import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';
import Booking from './components/Booking';
import ConfirmationPage from './components/Confirmation';

const App = () => {
  return (
    <div>
        <Router>
        <Switch>
          <Route path="/" element={<ShowList/>} />
          <Route path="/summary/:showId" element={<ShowSummary/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/confirmation" element={<ConfirmationPage/>} />
        </Switch>
    </Router>
      </div>
  );
};

export default App;
