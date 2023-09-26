

const Statistics = ({ data }) => {
  console.log(data, "inside data")
  if (!data) return <div>Loading...</div>;

  return (
    <div className="bg-transperent text-white p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
      <div className="flex flex-wrap justify-center items-center space-x-4 sm:space-x-5 md:space-x-6 lg:space-x-7 xl:space-x-8">
        <div className="flex flex-col bg-gray-700 w-full sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%] h-28 sm:h-44 md:h-52 lg:h-60 xl:h-72 items-center justify-center rounded-lg p-4">
          <p className="font-bold text-3xl text-gray-100 mb-2">
            {data.totalSaleAmount[0].total}
          </p>
          <p className="text-md text-gray-300">Total sales</p>
        </div>

        <div className="flex flex-col bg-gray-700 w-full sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%] h-28 sm:h-44 md:h-52 lg:h-60 xl:h-72 items-center justify-center rounded-lg p-4">
          <p className="font-bold text-3xl text-gray-100 mb-2">
            {data.allSoldItems}
          </p>
          <p className="text-md text-gray-300">Sold Items</p>
        </div>

        <div className="flex flex-col bg-gray-700 w-full sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%] h-28 sm:h-44 md:h-52 lg:h-60 xl:h-72 items-center justify-center rounded-lg p-4">
          <p className="font-bold text-3xl text-gray-100 mb-2">
            {data.allNotSoldItems}
          </p>
          <p className="text-md text-gray-300">Not Sold Items</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
