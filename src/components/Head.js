import { useDispatch } from "react-redux";
import { HAMBURGER_MENU, YOUTUBE_LOGO } from "../utils/constants";
import { userIcon } from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const handleSideBarToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
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
      <div className="col-span-10 flex justify-center items-center">
        <input
          className="rounded-l-full h-2/3 shadow-sm  outline-none w-3/5 border border-gray-400 ps-3 py-2"
          type="text"
          placeholder="what do you wanna watch today..."
        />
        <button className="border rounded-r-full py-1 border-gray-400  bg-gray-200 hover:bg-gray-300 border-s-0 borders-none h-2/3 px-4  shadow-md">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-12" alt="user-icon" src={userIcon} />
      </div>
    </div>
  );
};

export default Head;
