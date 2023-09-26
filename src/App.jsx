import React, { useEffect, useState } from 'react';
import ProductTable from './components/table'
import Statistics from './components/Statistics';
import CustomBarChart from './components/BarChart';
import CustomPieChart from './components/pieChart';
import Navbar from './components/navbar';
import Pagination from './components/Pagination'

const App = () => {
  const [tableData, setTableData] = useState([]);
  const [statisticsData, setStatisticsData] = useState();
  const [barChartData, setBarChartData] = useState([]);
  const [sortedPieChartData, setSortedPieChartData] = useState([]);
  const [currentMonth, setCurrentMonth] = useState('1');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Initialize with 1 page

  const itemsPerPage = 6;
  const handleMonthChange = (event) => {
    const newMonth = event.target.value;
    setCurrentMonth(newMonth);
    console.log(newMonth);
  };

  const handlePageChange = (totalPages) => {
    
    setCurrentPage(totalPages);
  };

  useEffect(() => {
    fetch(`http://localhost:3002/api/products/combinedData?month=${currentMonth}&page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setTableData(data.allProducts);
        setStatisticsData(data.allStatistics);
        console.log(data.allStatistics);
        setBarChartData(data.allRanges);
        setSortedPieChartData(data.allCategory.sort((a, b) => b.count - a.count)); 
        const totalItems = data.allProducts.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        console.log("Total Items:", totalItems); // Log the total items
        console.log("Total Pages:", totalPages); // Log the total pages

        setTotalPages(totalPages);
      });
  }, [currentMonth, currentPage,itemsPerPage]);


  return (
    <div className='relative bg-gray-900 text-white'>
      <div className='fixed top-0'> 
      <Navbar currentMonth={currentMonth} changeMonth={handleMonthChange} />
      </div>
      <div className="container mx-auto pt-20">
      <div className=' p-4 bg-gray-800 rounded-md overflow-y-scroll'>
      <h1 className="text-2xl font-semibold mb-4">Product Table</h1>
      <ProductTable data={tableData} currentPage={currentPage} itemsPerPage={itemsPerPage} />
      <Pagination
       handlePageChange={handlePageChange}
       currentPage={currentPage}
       totalPages={totalPages}
      />
      </div>
      <div className=' mt-4 p-4 bg-gray-800 rounded-md '>
        <h1 className="text-2xl font-semibold mb-4">Statistics</h1>
      <Statistics data={statisticsData} />
      </div>
      <div className='mt-4 pb-10 flex flex-row gap-4'>
      <div className='flex-1 p-3 bg-gray-800 rounded-md'>
      <h1 className="text-2xl font-semibold mb-4">Bar Chart</h1>
      <CustomBarChart data={barChartData} />
      </div>
      <div className='flex-1 p-3 bg-gray-800 rounded-md'>
      <h1 className="text-2xl font-semibold mb-4">Pie Chart</h1>
      <CustomPieChart data={sortedPieChartData} />
      </div>
      </div>
      
      
    </div>
    </div>
    
  );
};

export default App;
