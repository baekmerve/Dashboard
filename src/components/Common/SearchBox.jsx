import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";

const SearchBox = ({ searchQuery, setSearchQuery, placeholder }) => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={placeholder || "Search..."}
        className="w-full border rounded-lg focus:outline-none focus:border-2 placeholder:text-sm dark:bg-[#313e50]"
      />
      <Search />
    </div>
  );
};

export default SearchBox;
