import React from 'react';
import SearchBar from './containers/SearchBar';
import WeatherList from './containers/WeatherList';

const App = () => {
  return (
    <div>
      <SearchBar />
      <WeatherList />
    </div>
  );
};

export default App;
