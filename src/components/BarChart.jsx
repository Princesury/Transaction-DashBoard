import React, { useState} from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip } from "recharts";

export default function CustomBarChart({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = data[activeIndex];

  const handleClick = (entry, index) => {
    setActiveIndex(index);
  };
  

  return (
    <div className="text-center flex flex-col gap-5">
      <p>Click each rectangle</p>
      <BarChart width={400} height={200} data={data}>
        <XAxis dataKey="min" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="totalItems" onClick={handleClick}>
          {data.map((entry, index) => (
            <Cell
              cursor="pointer"
              fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
              key={`cell-${index}`}
            />
          ))}
        </Bar>
      </BarChart>
      {activeItem && (
        <p className="content">{`Total Items in Range ${activeItem.min} - ${activeItem.max}: ${activeItem.totalItems}`}</p>
      )}
    </div>
  );
}
