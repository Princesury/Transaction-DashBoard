// import React, { useState, useEffect } from "react";
// import { PieChart, Pie, Cell } from "recharts";

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
//   index
// }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > cx ? "start" : "end"}
//       dominantBaseline="central"
//     >
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

// export default function App(data) {
//   const [jsonData, setJsonData] = useState([]);

//   useEffect(() => {
//     // Fetch JSON data
//     fetch("http://localhost:3002/api/products/piechart?month=6")
//       .then((response) => response.json())
//       .then((data) => setJsonData(data.data))
//       .catch((error) => console.error("Error fetching JSON data:", error));
//   }, []);

//   return (
//     <div>
//       <PieChart width={400} height={400}>
//         <Pie
//           data={jsonData}
//           cx={200}
//           cy={200}
//           labelLine={false}
//           label={renderCustomizedLabel}
//           outerRadius={80}
//           fill="#8884d8"
//           dataKey="count"
//         >
//           {jsonData.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
//     </div>
//   );
// }

///22

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name,
}) => {
  // Calculate the angle in radians
  const RADIAN = Math.PI / 180;
  // Calculate the radius for label positioning
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;

  // Convert the angle from degrees to radians
  const angle = (midAngle * RADIAN)+(Math.PI/2);

  // Calculate the label's position
  const x = cx + radius * Math.sin(angle);
  const y = cy + radius * Math.cos(angle);

  // Determine the text anchor for proper alignment
  const textAnchor = x > cx ? "start" : "end";

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={textAnchor}
      dominantBaseline="central"
    >
      {`
      ${name} - ${(percent * 100).toFixed(0)}%
      `}

    </text>
  );
};

const CustomPieChart = ({ data }) => {
  // const [sortedData, setSortedData] = useState([]);
  
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="count"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} name={entry.category}/>
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
