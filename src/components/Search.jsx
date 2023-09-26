// import React, { useState, useEffect } from 'react';

// function Search({ onSearchTermChange }) {
//   const [searchTerm, setSearchTerm] = useState('');
//   // const [searchResults, setSearchResults] = useState([]);
//   // const [isLoading, setIsLoading] = useState(false);

//   // Parse the search parameters from the URL
//   const searchParams = new URLSearchParams(window.location.search);
//   const searchTermFromParams = searchParams.get("searchTerm");
//   const isLoadingFromParams = searchParams.get("isLoading") === "true";

//   useEffect(() => {
//     if (searchTerm !== searchTermFromParams) {
//       setSearchTerm(searchTermFromParams || ''); // Use an empty string if searchTermFromParams is null
//     }
//   }, [searchTermFromParams]);

//   const handleSearchInputChange = (event) => {
//     const newSearchTerm = event.target.value;
//     // Update the search parameters in the URL
//     const newSearchParams = new URLSearchParams(window.location.search);
//     newSearchParams.set("searchTerm", newSearchTerm);
//     newSearchParams.set("isLoading", false);
//     window.history.replaceState({}, '', `?${newSearchParams}`);
//     setSearchTerm(newSearchTerm);
//     onSearchTermChange(newSearchTerm)
//   };

//   return (
//     <div className="flex justify-center items-center">
//       <div>
//         <input
//           type="text"
//           placeholder="Enter a search term"
//           value={searchTerm}
//           onChange={handleSearchInputChange}
//           className="h-9 rounded-lg text-sm"
//         />
//       </div>
//     </div>
//   );
// }

// export default Search;
