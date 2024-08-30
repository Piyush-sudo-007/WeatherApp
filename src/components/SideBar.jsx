import { useState, useEffect } from "react";

const SideBar = ({
  humidity,
  windspeed,
  maximumTemperature,
  minimumTemperature,
  heatIndex,
}) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  const time = date.toLocaleTimeString();

  return (
    <div className="side-container glassCard">
      <h3 className="text-right text-white time">{time}</h3>
      <h4 className="text-right text-white">{new Date().toDateString()}</h4>
      <hr className="pi-hr" />
      <div className="info">
        <div className="info-para">
          <h5>Humidity</h5>
          <h5>{humidity} gm/m&#179;</h5>
        </div>
        <hr className="pi-hr" />
        <div className="info-para">
          <h5>Wind Speed</h5>
          <h5>{windspeed} km/h</h5>
        </div>
        <hr className="pi-hr" />
        <div className="info-para">
          <h5>Max Temperature</h5>
          <h5>{maximumTemperature}&deg;C</h5>
        </div>
        <hr className="pi-hr" />
        <div className="info-para">
          <h5>Min Temperature</h5>
          <h5>{minimumTemperature}&deg;C</h5>
        </div>
        <hr className="pi-hr" />
        <div className="info-para">
          <h5>Heat Index</h5>
          <h5>{heatIndex ? heatIndex : "N/A"}&deg;C</h5>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
