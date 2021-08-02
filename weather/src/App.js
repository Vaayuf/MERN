import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [city, setCity] = useState('null');
  const [search, setSearch] = useState();

  const searchValue = (event) => {
    setSearch(event.target.value);
  }

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=c3cdc9af5a63d41e4cbce38f9e43f06f`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };

    fetchApi();
  })

  return (
    <>

      <div className="box">
        <div className="card">
          <div className="inputData">
            <input type="text" placeholder="Search" value={search} onChange={searchValue} />
          </div>

          {!city ?
            (
              <p>No Data found</p>
            ) :
            (
              <div className="info">
                <h1 className="location">
                  <span class="material-icons">
                    location_on
                  </span>
                   {search} 
                  
                </h1>

                <h2 className="temp">
                   {city.temp} 
                  25.49
                </h2>
                <h3 className="extra-info">
                  Min temp: {city.temp_min} | Max temp: {city.temp_max}
                </h3>
              </div>
            )}
        </div>
      </div>
    </>
  );
}

export default App;