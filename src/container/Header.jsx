import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../redux/toogleSlice";
import {
  GOOGLE_API_KEY,
  HAMBURGER_ICON,
  SEARCH_API,
  YOUTUBE_LOGO,
} from "../assets/constants";
import { cacheSearch } from "../redux/searchSlice";
import { addListVideos } from "../redux/videoSlice";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  const handleSearchText = async () => {
    const searchItem = await fetch(SEARCH_API + searchText);
    const dataJson = await searchItem?.json();
    setSearchSuggestion(dataJson[1]);

    dispatch(
      cacheSearch({
        [searchText]: dataJson[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSearchSuggestion(searchCache[searchText]);
      } else {
        handleSearchText();
      }
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [searchText]);

  const handleSearchResults = async () => {
    const searchResults = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=${encodeURIComponent(
        searchText
      )}&key=${GOOGLE_API_KEY}`
    );
    const data = await searchResults.json();
    dispatch(addListVideos(data?.items));
    setSearchText("");
  };

  useEffect(() => {
    handleSearchResults();
  }, []);

  const toggleMenuHandler = () => {
    dispatch(toggleSideBar());
  };
  return (
    <div className="p-2.5 flex shadow-lg justify-between">
      <div className="flex">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src={HAMBURGER_ICON}
        />

        <a href="/">
          <img
            className="h-7 mx-2 cursor-pointer"
            alt="YouTube Logo"
            src={YOUTUBE_LOGO}
          />
        </a>
      </div>

      <div>
        <div>
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
            onKeyDown={(e) => e.key === "Enter" && handleSearchResults()}
            className="border border-gray-400  relative w-96 py-2 px-4 rounded-l-full"
          />
          <button
            className="p-2 rounded-r-full border bg-gray-300 border-gray-400 cursor-pointer"
            onClick={handleSearchResults}
          >
            Search
          </button>
          {showSuggestion && (
            <div className="absolute shadow-lg bg-gray-200 p-2 rounded-lg w-96">
              <ul>
                {searchSuggestion?.map((suggestions) => (
                  <li
                    key={suggestions}
                    className="p-2 hover:bg-gray-300 cursor-pointer"
                  >
                    🔍 {suggestions}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div>
        <img
          className="h-8 cursor-pointer"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgB730p0ChSl_CNr5N6n05AGzEtEAhFypOFg&s"
        />
      </div>
    </div>
  );
};

export default Header;
