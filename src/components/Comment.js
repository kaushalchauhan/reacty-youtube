import React from "react";

const Comment = ({ data, profilePic }) => {
  if (!data) {
    return null; // or handle this case as appropriate
  }
  const { name, text } = data;
  return (
    <div className="my-3 py-3 px-2 flex group bg-gray-200 shadow-sm rounded-md  hover:bg-gray-300 transition-all duration-300">
      <div className="overflow-hidden">
        <img
          className="size-7 group-hover:scale-110 transition-all duration-300"
          src={profilePic}
          alt="profileImg"
        />
      </div>
      <div className="px-3">
        <h1 className="font-bold">{name}</h1>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
