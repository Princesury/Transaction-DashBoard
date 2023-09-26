// // src/DataDisplay.js
// import React, { useState, useEffect } from 'react';

// const DataDisplay = ({ selectedMonth }) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Replace with your API endpoint
//     const apiUrl = `https://localhost:3002/api/products/combinedData?month=${selectedMonth}`;

//     setLoading(true);

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((result) => {
//         setData(result);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       });
//   }, [selectedMonth]);

//   if (loading) {
//     return <p>Loading data...</p>;
//   }

//   if (!data) {
//     return null;
//   }

//   return (
//     <div>
//       <h2>Data for {selectedMonth}</h2>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default DataDisplay;
