import React from "react";

const FilterList = () => {
  const btnList = [
    "All",
    "Music",
    "Mixes",
    "T-Series",
    "Qawwalis",
    "Triller",
    "Hollywood",
    "Shorts",
    "Gaming",
    "Electronis",
    "Brands",
    "Comedy",
    "Rapper",
    "Drama",
    "Tragedy",
    "Personal",
    "Sports",
    "News",
    "Live",
  ];
  return (
    <div>
      {btnList.map((btn) => (
        <button
          key={btn}
          className="p-2 ml-2 bg-gray-200 rounded-lg font-semibold cursor-pointer"
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default FilterList;
