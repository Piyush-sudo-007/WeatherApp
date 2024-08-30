import { useEffect, useRef, useState } from "react";
import "../index.css";
import "../App.css";

import sun from "../assets/sun.png";
import cloud from "../assets/cloud.png";
import rain from "../assets/rain.png";
import strom from "../assets/strom.png";
import snow from "../assets/snow.png";
import wind from "../assets/wind.png";

const WeatherCard = ({
  setPlace,
  temperature,
  place,
  iconString,
  conditions,
  longitude,
  latitude,
  tz,
}) => {
  const newCity = useRef();

  const handleNewCity = () => {
    const cityName = newCity.current.value.trim();
    if (cityName !== "") {
      setPlace(cityName);
      newCity.current.value = "";
    }
  };
  const handleCity = (event) => {
    if (event.key === "Enter") {
      handleNewCity();
    }
  };
  const addCity = () => {
    setPlace("Aizawl");
  };

  const [icon, setIcon] = useState(sun);

  useEffect(() => {
    if (iconString) {
      if (
        iconString.toLowerCase().includes("cloud") ||
        iconString.toLowerCase().includes("overcast")
      ) {
        setIcon(cloud);
      } else if (
        iconString.toLowerCase().includes("rain") ||
        iconString.toLowerCase().includes("shower")
      ) {
        setIcon(rain);
      } else if (iconString.toLowerCase().includes("snow")) {
        setIcon(snow);
      } else if (iconString.toLowerCase().includes("sun")) {
        setIcon(sun);
      } else if (
        iconString.toLowerCase().includes("strom") ||
        iconString.toLowerCase().includes("thunder")
      ) {
        setIcon(strom);
      } else if (iconString.toLowerCase().includes("wind")) {
        setIcon(wind);
      } else {
        setIcon(sun);
      }
    }
  }, [iconString]);

  return (
    <div className="main-container glassCard">
      <div>
        <div className="curr">
          <div className="search-box ">
            <input
              className="input placeholder-white"
              type="search"
              placeholder="+Enter your city"
              ref={newCity}
              onKeyDown={handleCity}
            />
            <button type="search" id="search-btn" onClick={handleNewCity}>
              <div className="circle"></div>
              <div className="handle"></div>
            </button>
          </div>
          <button
            className="pi-btn"
            onClick={() => {
              addCity();
            }}
          >
            Use Current Location
          </button>
        </div>
        <div className="location">
          <h2 id="location-name" className="text-white">
            {place}
          </h2>
          <h4 id="coordinate" className="text-white">
            {latitude}&deg;N &nbsp; &nbsp; {longitude}&deg;E
          </h4>
          <h4 id="coordinate" className="text-white">
            {tz}
          </h4>
        </div>
      </div>
      <div className="updates">
        <img src={icon} alt="icon" />
        <h1 className="text-white">{temperature} &deg;C</h1>
        <h4 className="text-white">{conditions}</h4>
      </div>
    </div>
  );
};

export default WeatherCard;
