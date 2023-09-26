// import React, { useEffect, useState } from 'react';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
// import Barchart from './BarChart'
// // import MonthPicker from '@wniemiec-component-reactnative/month-picker';
// import Statistics from './Statistics';
// import Navbar from './navbar';
// import App from './pieChart';


// const DataList = ({ searchTerm }) => {
//   const [productList, setProductList] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1); // Initialize with 1 page
//   // const [search , setSearch] = useState('')

//   // const apiUrl = `http://localhost:3002/api/products?page=${currentPage}`;
//   const apiUrl = `http://localhost:3002/api/products?page=${currentPage}&query=${searchTerm}`;
  

//   const fetchProductList = async () => {
//     try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();

//       setProductList(data.data);
//       setTotalPages(data.totalPages); // Update total pages from API response
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   useEffect(() => {
//     fetchProductList();
//   }, [currentPage, searchTerm]);

//   const handlePageChange = (event, newPage) => {
//     setCurrentPage(newPage);
//   };

//   return (
//     <div className='justify-center items-center'>
//       <table className='w-700 h-full m-24  rounded-2xl bg-gray-700 text-white'>
//         <thead className='h-16 mt-4 text-md '>
//           <tr>
//             <th className='border-gray-500 border-r-2 px-2 border-b-2'>ID</th>
//             <th className='border-gray-500 border-r-2 px-2 border-b-2'>Title</th>
//             <th className='border-gray-500 border-r-2 px-2 border-b-2'>Description</th>
//             <th className='border-gray-500 border-r-2 px-2 border-b-2'>Price</th>
//             <th className='border-gray-500 border-r-2 px-2 border-b-2'>Category</th>
//             <th className='border-gray-500 border-r-2 px-2 border-b-2'>Sold</th>
//             <th className='border-gray-500  px-2 border-b-2'>Date</th>
//           </tr>
//         </thead>
//         <tbody className='h-16 mt-4 text-sm font-normal'>
//           {productList.map((product) => (
//             <tr key={product._id} className=''>
//               <td className='border-gray-500 border-r-2 px-2 '>{product._id}</td>
//               <td className='border-gray-500 border-r-2 px-2 '>{product.title}</td>
//               <td className='border-gray-500 border-r-2 px-2 '>{product.description}</td>
//               <td className='border-gray-500 border-r-2 px-2 '>${product.price.toFixed(2)}</td>
//               <td className='border-gray-500 border-r-2 px-2 '>{product.category}</td>
//               <td className='border-gray-500 border-r-2 px-2 '>{product.sold ? 'Yes' : 'No'}</td>
//               <td className='border-gray-500  px-2 '>{new Date(product.dateOfSale).toLocaleDateString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className='flex justify-center items-center mt-4 text-slate-950 font-bold'>
//         <Stack spacing={2}>
//         <Pagination
//         count={totalPages}
//         page={currentPage}
//         onChange={handlePageChange}
//         variant="outlined"
//         fontSize={24}
//       /> 
//         </Stack>
//       </div>
//       <Statistics />
//       <div className='flex flex-row justify-around items-center'>
//       <Barchart />
//       <App />
//       </div>
//     </div>
//   );
// };

// export default DataList;
