import { useDispatch, useSelector } from "react-redux";
import { IoSearchOutline } from "react-icons/io5";
import {
  HAMBURGER_MENU,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { userIcon } from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestion] = useState(false);
  const handleSideBarToggle = () => {
    dispatch(toggleMenu());
  };
  const searchCache = useSelector((store) => store.search);
  const debouncingTime = 250;
  useEffect(() => {
    // implemented debouncing & caching from the redux store
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, debouncingTime);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    if (searchQuery) {
      try {
        console.log("api call", searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        console.log(json[1]);
        // update cache result
        dispatch(cacheResults({ [searchQuery]: json[1] }));
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  return (
    <div className="grid grid-flow-col p-5 shadow-lg content-center">
      <div className="flex col-span-1 gap-2">
        <img
          onClick={handleSideBarToggle}
          className="h-12 cursor-pointer"
          alt="menu"
          src={HAMBURGER_MENU}
        />

        <img
          className="h-12 cursor-pointer"
          alt="youtube-logo"
          src={YOUTUBE_LOGO}
        />
      </div>
      <div className="col-span-10 relative flex flex-col justify-center">
        <div className="flex items-center">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-l-full shadow-sm ps-3  outline-none w-3/5 border border-gray-400 p-2"
            type="text"
            placeholder="what do you wanna watch today..."
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border rounded-r-full py-3  border-gray-400  bg-gray-200 hover:bg-gray-300 border-s-0 borders-none px-4  shadow-md place-items-stretch">
            <IoSearchOutline />
          </button>
        </div>
        {showSuggestions && (
          <div
            className="absolute top-12
           bg-white rounded-md w-3/5 z-10 shadow-lg "
          >
            {searchQuery &&
              suggestions.map((suggestion, index) => (
                <div
                  className="hover:bg-gray-200 px-4 py-1 flex items-center gap-1"
                  key={index}
                >
                  <IoSearchOutline /> {suggestion}
                </div>
              ))}
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img className="h-12" alt="user-icon" src={userIcon} />
      </div>
    </div>
  );
};

export default Head;
