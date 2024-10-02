
import React, { useState } from "react";

const dummyData = [
  { ticker: "APPLEE", price: 150, category: "Tech", marketCap: "2.5T" },
  { ticker: "GOOGLEE", price: 2800, category: "Tech", marketCap: "1.8T" },
  { ticker: "TESLAA", price: 750, category: "Automotive", marketCap: "50B" },
  { ticker: "FORDD", price: 450, category: "Automotive", marketCap: "20B" },
  { ticker: "NETFLIXX", price: 620.98, category: "Entertainment", marketCap: "290B"}
];

const AssetList = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(dummyData);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const result = dummyData.filter(
      (data) =>
        data.ticker.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data.category.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400 p-4 text-white">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Asset List</h1>
        <input
          type="text"
          placeholder="Search by ticker or category..."
          value={search}
          onChange={handleSearch}
          className="p-2 mb-4 w-full text-black border border-gray-300 rounded"
        />
        <table className="table-auto w-full text-left bg-white text-black rounded-md shadow-lg">
          <thead>
            <tr className="bg-purple-700 text-white">
              <th className="px-4 py-2">Ticker</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">MarketCap</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((asset) => (
              <tr key={asset.ticker}>
                <td className="border px-4 py-2">{asset.ticker}</td>
                <td className="border px-4 py-2">{asset.price}</td>
                <td className="border px-4 py-2">{asset.category}</td>
                <td className="border px-4 py-2">{asset.marketCap}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetList;

