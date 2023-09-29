import React, {  useEffect, useState } from 'react';
import ProductTable from './components/table'
import Statistics from './components/Statistics';
// import CustomBarChart from './components/BarChart';
// import CustomPieChart from './components/pieChart';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination'
// import { someFunction } from './someModule.js';


const App = () => {
  const [tableData, setTableData] = useState([]);
  const [statisticsData, setStatisticsData] = useState();
  const [month , setMonth] = useState("March")
  const [barChartData, setBarChartData] = useState([]);
  const [sortedPieChartData, setSortedPieChartData] = useState([]);
  const [currentMonth, setCurrentMonth] = useState('3');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [data, setData] = useState([]);
  const [CustomBarChart, setCustomBarChart] = useState(null);
  const [CustomPieChart, setCustomPieChart] = useState(null);


const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"]

  const itemsPerPage = 6; // Number of items to display per page
  // const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  // const totalPages = Math.ceil(data.length / itemsPerPage);
  console.log(totalPages,"totalPages")
  
  // setData(currentData)
  // setCurrentPage(currentPage);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleMonthChange = (event) => {
    const newMonth = event.target.value;
    setCurrentMonth(newMonth);
    console.log(newMonth);
  };

  // https://backend12.azurewebsites.net/api/products/combinedData?month=${currentMonth}&page=${currentPage}
  useEffect(() => {
    fetch(`https://backend12.azurewebsites.net/api/products/combinedData?month=${currentMonth}&page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setTableData(data.allProducts);
        setStatisticsData(data.allStatistics);
        setMonth(monthNames[currentMonth-1])
        console.log(data.allStatistics);
        setBarChartData(data.allRanges);
        setSortedPieChartData(data.allCategory.sort((a, b) => b.count - a.count)); 
  
      });
  }, [currentMonth, currentPage]);

   useEffect(() => {
    // Dynamically import the components when needed
    import('./components/BarChart').then((module) => {
      setCustomBarChart(() => module.default);
    });

    import('./components/PieChart').then((module) => {
      setCustomPieChart(() => module.default);
    });
  }, []);


  return (
    <div className='relative bg-gray-900 text-white'>
      <div className='fixed top-0'> 
      <Navbar currentMonth={currentMonth} changeMonth={handleMonthChange} />
      </div>
      <div className="container mx-auto pt-20">
      <div className=' p-4 bg-gray-800 rounded-md overflow-y-scroll'>
        <div className='flex flex-row justify-between items-center mb-2'>
      <h1 className="text-2xl font-semibold mb-4">Product Table</h1>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      </div>
      <ProductTable data={tableData}  />
      </div>
      <div className=' mt-4 p-4 bg-gray-800 rounded-md '>
        <h1 className="text-2xl font-semibold mb-4">Statistics for {month}</h1>
      <Statistics data={statisticsData} />
      </div>
      <div className='mt-4 pb-10 flex flex-row gap-4'>
      <div className='flex-1 p-3 bg-gray-800 rounded-md'>
      <h1 className="text-2xl font-semibold mb-4">Bar Chart for {month}</h1>
      {CustomBarChart && <CustomBarChart data={barChartData} />}
      </div>
      <div className='flex-1 p-3 bg-gray-800 rounded-md'>
      <h1 className="text-2xl font-semibold mb-4">Pie Chart for {month}</h1>
      {CustomPieChart && <CustomPieChart data={sortedPieChartData} />}
      </div>
      </div>
      
      
    </div>
    </div>
    
  );
};

export default App;
