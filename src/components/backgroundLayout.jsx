import { useEffect, useState } from "react";
import { useWeatherContext } from "../context";

import Clear from "../assets/clear.jpg";
import Cloudy from "../assets/cloudy.jpg";
import Foggy from "../assets/foggy.jpg";
import Rainy from "../assets/rainy.jpg";
import Snowy from "../assets/snowy.jpg";
import Stromy from "../assets/stromy.jpg";
import Sunny from "../assets/sunny.jpg";

const BackgroundLayout = () => {
  const { weather } = useWeatherContext();

  const [image, setImage] = useState(Clear);

  useEffect(() => {
    if (weather.conditions) {
      let displayImage = weather.conditions;
      if (displayImage.toLowerCase().includes("clear")) {
        setImage(Clear);
      } else if (
        displayImage.toLowerCase().includes("cloud") ||
        displayImage.toLowerCase().includes("overcast")
      ) {
        setImage(Cloudy);
      } else if (
        displayImage.toLowerCase().includes("rain") ||
        displayImage.toLowerCase().includes("shower")
      ) {
        setImage(Rainy);
      } else if (displayImage.toLowerCase().includes("snow")) {
        setImage(Snowy);
      } else if (displayImage.toLowerCase().includes("fog")) {
        setImage(Foggy);
      } else if (
        displayImage.toLowerCase().includes("strom") ||
        displayImage.toLowerCase().includes("thunder")
      ) {
        setImage(Stromy);
      } else {
        setImage(Sunny);
      }
    }
  }, [weather]);

  return (
    <img
      src={image}
      alt="weather image"
      className="h-screen w-full fixed left-0 top-0 -z-[10]"
    />
  );
};

export default BackgroundLayout;
