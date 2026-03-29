import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch, placeholder }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative w-full max-w-xl group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
        <Search size={20} />
      </div>
      <input
        type="text"
        className="block w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all shadow-sm group-hover:border-gray-300"
        placeholder={placeholder || "Search tasks..."}
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
