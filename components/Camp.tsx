import React from "react";
import Card from "./Card";
import data from "../data/dataquery.json";

const camp = () => {
  return (
    <div className="px-5 py-5 border-2 border-black rounded-xl container-max mx-10 bg-gray-300">
      <div className=" md:m-5 border-1 border-black">
        <div className="card-list">
          {data.data.map((data) => (
            <Card
              key={data.name}
              name={data.name}
              url={data.url}
              text={data.text}
              img={data.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default camp;
