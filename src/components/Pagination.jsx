// import react from 'react'
// import PropTypes from 'prop-types';
// // import Table from './table';
// const Pagination = ({data}) => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 10;
  
//     const indexOfLastItem = currentPage * itemsPerPage; // 10
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage; // 0 
//    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  
//     const totalPages = Math.ceil(data.length / itemsPerPage);
  
//     const nextPage = () => {
//       if (currentPage < totalPages) {
//         setCurrentPage(currentPage + 1);
//       }
//     };
  
//     const prevPage = () => {
//       if (currentPage > 1) {
//         setCurrentPage(currentPage - 1);
//       }
//     };
//   return(
//     <div className="flex justify-end mt-4">
//         <button
//           onClick={prevPage}
//           disabled={currentPage === 1}
//           className={`px-3 py-2 mr-2 ${
//             currentPage === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
//           }`}
//         >
//           Previous
//         </button>
//         <button
//           onClick={nextPage}
//           disabled={currentPage === totalPages}
//           className={`px-3 py-2 ${
//             currentPage === totalPages ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
//           }`}
//         >
//           Next
//         </button>
//       </div>
//   )
// }

// export default Pagination;


// Pagination.jsx
import React from 'react';

const Pagination = ({ handlePageChange, currentPage, totalPages }) => {
  const canGoBack = currentPage > 1;
  const canGoForward = currentPage < totalPages;
  console.log("Current Page:", currentPage);
  console.log("Total Pages:", totalPages);

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={!canGoBack}
        className={`px-4 py-2 mx-1 rounded-lg ${
          !canGoBack
            ? 'bg-gray-400 text-gray-800 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600 text-white'
        }`}
      >
        Previous
      </button>
      <span className="text-lg font-semibold mx-2">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={!canGoForward}
        className={`px-4 py-2 mx-1 rounded-lg ${
          !canGoForward
            ? 'bg-gray-400 text-gray-800 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600 text-white'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;


