import "./App.css";
import WeatherCard from "./components/WeatherCard";
import SideBar from "./components/SideBar";
import Minicard from "./components/Minicard";
import BackgroundLayout from "./components/backgroundLayout";
import { useWeatherContext } from "./context";

function App() {
  const { weather, setPlace, thisLocation, values, longitude, latitude, tz } =
    useWeatherContext();

  return (
    <>
      <div className="container pt-5">
        <WeatherCard
          setPlace={setPlace}
          place={thisLocation}
          iconString={weather.conditions}
          conditions={weather.conditions}
          temperature={weather.temp}
          longitude={longitude}
          latitude={latitude}
          tz={tz}
        ></WeatherCard>
        <SideBar
          windspeed={weather.wspd}
          humidity={weather.humidity}
          heatIndex={weather.heatindex}
          maximumTemperature={weather.maxt}
          minimumTemperature={weather.mint}
        ></SideBar>
      </div>

      <div className="flex ">
        {values.slice(1, 7).map((items) => {
          return (
            <Minicard
              key={items.datetime}
              time={items.datetime}
              temp={items.temp}
              iconString={items.conditions}
              conditions={items.conditions}
            ></Minicard>
          );
        })}
      </div>

      <BackgroundLayout></BackgroundLayout>
    </>
  );
}

export default App;
