export interface Comment {
  data?: any;
  username: string;
  comment: string;
  subComments?: Comment[];
  id: string;
}

export const commentData: Comment[] = [
  {
    id: "1",
    username: "test1",
    comment: "documents",
    subComments: [
      {
        id: "2",
        username: "test2",
        comment: "27-10-1990",
      },
      {
        id: "3",
        username: "test3",
        comment: "invoices",
        subComments: [
          {
            id: "4",
            comment: "electricityBills",
            username: "test2",
            subComments: [
              { comment: "invoice1", username: "test1", id: "5" },
              { comment: "invoice2", username: "test3", id: "6" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "7",
    comment: "photos",
    username: "test2",
    subComments: [
      {
        comment: "summer2020",
        username: "test3",
        id: "8",
        subComments: [{ comment: "10.25", username: "test1", id: "9" }],
      },
    ],
  },
];
