
import React from 'react';

const MonthSelector = ({ currentMonth, handleMonthChange }) => {
  const months = [
    {
      month: 'January',
      value: '1', 
    },
    {
      month: 'February',
      value: '2', 
    },
    {
      month: 'March',
      value: '3', 
    },
    {
      month: 'April',
      value: '4', 
    },
    {
      month: 'May',
      value: '5', 
    },
    {
      month: 'June',
      value: '6', 
    },
    {
      month: 'July',
      value: '7', 
    },
    {
      month: 'August',
      value: '8', 
    },
    {
      month: 'September',
      value: '9', 
    },
    {
      month: 'October',
      value: '10', 
    },
    {
      month: 'November',
      value: '11', 
    },
    {
      month: 'December',
      value: '12', 
    },
  ];

  return (
    <div className="month-selector">
      <label htmlFor="monthSelect">Select Month: </label>
      <select
        id="monthSelect"
        value={currentMonth}
        onChange={handleMonthChange}
        className='text-white bg-gray-700 rounded-md text-center h-7'
      >
        {months.map((month) => (
          <option key={month.value} value={month.value}>
            {month.month} {/* Use 'month' property for label */}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MonthSelector;
