import React from "react";
import { commentData } from "../utils/constants";

import CommentsList from "./CommentsList";
const CommentsContainer = () => {
  return (
    <div className="px-5">
      <div className="text-2xl font-bold">Comments:</div>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
