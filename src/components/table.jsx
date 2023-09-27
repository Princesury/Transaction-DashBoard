// import React,{useState} from 'react';
const ProductTable = ({ data }) => {
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-gray-900 text-white "> {/* Updated background and text color */}
      <table className="min-w-full divide-y divide-gray-700"> {/* Updated table border color */}
        <thead className="bg-gray-700"> {/* Updated table header background color */}
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"> {/* Updated text color */}
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"> {/* Updated text color */}
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"> {/* Updated text color */}
              Image
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"> {/* Updated text color */}
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"> {/* Updated text color */}
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"> {/* Updated text color */}
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"> {/* Updated text color */}
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"> {/* Updated text color */}
              Sold
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-700"> {/* Updated table row and border color */}
          {data.map((product) => (
            <tr key={product._id}>
              <td className="px-6 py-4 whitespace-nowrap">{product._id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{new Date(product.dateOfSale).toLocaleDateString()}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <img className="h-10 w-10 rounded-full" src={product.image} alt="" />
              </td>
              <td className="px-6 py-4 whitespace-wrap">{product.title}</td>
              <td className="px-6 py-4 whitespace-wrap">{product.description}</td>
              <td className="px-6 py-4 whitespace-nowrap">${product.price.toFixed(2)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.category}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {product.sold ? (
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-500 text-green-100"> {/* Updated colors */}
                    Sold
                  </span>
                ) : (
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-500 text-red-100"> {/* Updated colors */}
                    Available
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
