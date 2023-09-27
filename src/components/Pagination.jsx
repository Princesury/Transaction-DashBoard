import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Define the desired limit for Button 1 (1 to 10)
  const button1Limit = 10;

  return (
    <div className="flex justify-center items-center mb-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || (currentPage - 1) > button1Limit}
        className="px-3 py-1 mr-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
      >
        Prev
      </button>
      <span className="text-gray-400 font-bold">
        {totalPages === null ? "Loading..." : `Page ${currentPage} of ${totalPages}`}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || (currentPage + 1) > button1Limit}
        className="px-3 py-1 ml-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
