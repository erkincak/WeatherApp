import React from "react";

const City = ({ city }) => {
  console.log(city);
  return (
    <div>
      <div className="w-[350px] border-2 border-transparent shadow-md    hover:text-white rounded-md shadow mx-auto">
        <h1 className="text-5xl font-mono">{city.main.temp} °C</h1>
        <h1 className="text-3xl font-sans">{city.name}</h1>
        <h1 className="text-2xl font-mono">{city.weather[0].main}</h1>
        <h1 className="text-2xl font-mono">{city.wind.speed} knot</h1>
      </div>
    </div>
  );
};

export default City;
