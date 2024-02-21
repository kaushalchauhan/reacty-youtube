import React from "react";
import { userIcon } from "../utils/constants";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} profilePic={userIcon} />
      {comment?.reply && (
        <div className="ps-5 ms-5 border border-l-black">
          <CommentsList comments={comment.reply} />
        </div>
      )}
    </div>
  ));
};

export default CommentsList;
