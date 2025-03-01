import React from "react";
import CommentBox from "./CommentBox";

const data = [
  {
    username: "Akshay Saini",
    comment:
      "Lorem Ipsum es simplemente texto de relleno de la impresión y composición tipográfica",
    replies: [
      {
        username: "Deepika Padukone",
        comment:
          "Lorem Ipsum es simplemente texto de relleno de la impresión y composición tipográfica",
      },
    ],
  },
  {
    username: "Elon Musk",
    comment:
      "Lorem Ipsum es simplemente texto de relleno de la impresión y composición tipográfica",
    replies: [
      {
        username: "Deepika Padukone",
        comment:
          "Lorem Ipsum es simplemente texto de relleno de la impresión y composición tipográfica",
        replies: [
          {
            username: "Sania",
            comment:
              "Lorem Ipsum es simplemente texto de relleno de la impresión y composición tipográfica",
            replies: [
              {
                username: "James Corbet",
                comment:
                  "Lorem Ipsum es simplemente texto de relleno de la impresión y composición tipográfica",
                replies: [
                  {
                    username: "James Corbet",
                    comment:
                      "Lorem Ipsum es simplemente texto de relleno de la impresión y composición tipográfica",
                    replies: [
                      {
                        username: "James Corbet",
                        comment:
                          "Lorem Ipsum es simplemente texto de relleno de la impresión y composición tipográfica",
                      },
                      {
                        username: "Leonardo Decaprio",
                        comment:
                          "Lorem Ipsum es simplemente texto de relleno de la impresión y composición tipográfica",
                      },
                    ],
                  },
                  {
                    username: "Leonardo Decaprio",
                    comment:
                      "Lorem Ipsum es simplemente texto de relleno de la impresión y composición tipográfica",
                  },
                ],
              },
              {
                username: "Leonardo Decaprio",
                comment:
                  "Lorem Ipsum es simplemente texto de relleno de la impresión y composición tipográfica",
              },
            ],
          },
          {
            username: "Akshay Saini",
            comment:
              "Lorem Ipsum es simplemente texto de relleno de la impresión y composición tipográfica",
          },
        ],
      },
      {
        username: "Akshay Saini",
        comment:
          "Lorem Ipsum es simplemente texto de relleno de la impresión y composición tipográfica",
      },
    ],
  },
  {
    username: "Sachin Tendulkar",
    comment:
      "Lorem Ipsum es simplemente texto de relleno de la impresión y composición tipográfica",
  },
];

const Comments = () => {
  return (
    <div>
      <CommentBox data={data} />
    </div>
  );
};

export default Comments;
