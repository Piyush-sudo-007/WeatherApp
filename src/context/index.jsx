import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
  const [place, setPlace] = useState("new delhi");
  const [thisLocation, setLocation] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [tz, setTz] = useState();

  const fetchWeather = async () => {
    const options = {
      method: "GET",

      url: "https://visual-crossing-weather.p.rapidapi.com/forecast",

      params: {
        aggregateHours: "24",
        location: place,
        contentType: "json",
        unitGroup: "metric",
        shortColumnNmaes: 0,
      },

      headers: {
        "x-rapidapi-key": "6cba7b50f5msh216f03f6255d54ep1ad2b6jsn170e7c5eb1fa",
        "x-rapidapi-host": "visual-crossing-weather.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      // console.log(response.data);
      const thisData = Object.values(response.data.locations)[0];
      setLocation(thisData.address);
      setValues(thisData.values);
      setWeather(thisData.values[0]);
      setLatitude(thisData.latitude);
      setLongitude(thisData.longitude);
      setTz(thisData.tz);
    } catch (error) {
      // console.error(error);
      alert("This Place does not exist");
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [place]);

  useEffect(() => {
    // console.log(values);
  }, [values]);

  return (
    <WeatherContext.Provider
      value={{
        weather,
        setPlace,
        values,
        thisLocation,
        longitude,
        latitude,
        tz,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);
