import { useEffect, useState } from "react";
import "../index.css";
import "../App.css";

import sun from "../assets/sun.png";
import cloud from "../assets/cloud.png";
import rain from "../assets/rain.png";
import strom from "../assets/strom.png";
import snow from "../assets/snow.png";
import wind from "../assets/wind.png";

const Minicard = ({ time, temp, iconString, conditions }) => {
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
    <div className="glassCard p-1 flex flex-col card-container">
      <p className="text-center text-white mb-0">
        {
          new Date(time)
            .toLocaleTimeString("en", { weekday: "long" })
            .split(" ")[0]
        }
      </p>
      <hr className="pi-hr" />
      <div className="w-full flex justify-center items-center flex-1">
        <img src={icon} alt="weather" className="w-[4rem] h-[4-rem]" />
      </div>
      <p className="text-center font-bold text-white">{temp}&deg;C</p>
      <p className="text-center font-bold text-white">{conditions}</p>
    </div>
  );
};

export default Minicard;
