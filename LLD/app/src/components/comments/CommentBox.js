import React from "react";

const CommentBox = ({ data }) => {
  return data.map((comment, index) => (
    <div key={index} className="flex">
      <div>
        <img
          className="w-16 p-2 rounded-lg"
          src="https://styles.redditmedia.com/t5_2qp7h/styles/communityIcon_1a42eeljakae1.png"
          alt="user"
        />
      </div>
      <div>
        <p className="font-bold px-2 py-4">{comment.username}</p>
        <p className="px-2">{comment.comment}</p>
        {comment.replies && (
          <p>
            <CommentBox data={comment.replies} />
          </p>
        )}
      </div>
    </div>
  ));
};

export default CommentBox;
