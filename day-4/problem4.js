// Given the following data structure
const data =
  [
    {
      name: "John Smith",
      age: new Map([["age", 88]]),
      favoriteMovie: [
        {
          title: "Hulk",
          genre: "action",
          rating: 6,
        },
      ],
    },
    {
      name: "Tony Kim",
      age: new Map([["age", 3]]),
      favoriteMovie: [
        {
          title: "Top Gun",
          genre: "action",
          rating: 10,
        },
      ],
    },
    {
      name: "John Smith",
      age: new Map([["age", 35]]),
      favoriteMovie: [
        {
          title: "Saw",
          genre: "horror",
          rating: 8,
        },
      ],
    },
  ] -
  // Using the bubble sort, please sort each profile
  // by ascending order for the following properties:
  age -
  rating;
// *** If you want to know how to retrieve a value from a map,
// please see https://developer.mozilla.org/en-
US / docs / Web / JavaScript / Reference / Global_Objects / Map / get;
// age (solution should look like)
const sortedByAge = [
  {
    name: "Tony Kim",
    age: new Map([["age", 3]]),
    favoriteMovie: [
      {
        title: "Top Gun",
        genre: "action",
        rating: 10,
      },
    ],
  },
  {
    name: "John Smith",
    age: new Map([["age", 35]]),
    favoriteMovie: [
      {
        title: "Saw",
        genre: "horror",
        rating: 8,
      },
    ],
  },
  {
    name: "John Smith",
    age: new Map([["age", 88]]),
    favoriteMovie: [
      {
        title: "Hulk",
        genre: "action",
        rating: 6,
      },
    ],
  },
];

// favorite movie by rating (solution should look like)
const sortedByRating = [
  {
    name: "John Smith",
    age: new Map([["age", 88]]),
    favoriteMovie: [
      {
        title: "Hulk",
        genre: "action",
        rating: 6,
      },
    ],
  },
  {
    name: "John Smith",
    age: new Map([["age", 35]]),
    favoriteMovie: [
      {
        title: "Saw",
        genre: "horror",
        rating: 8,
      },
    ],
  },
  {
    name: "Tony Kim",
    age: new Map([["age", 3]]),
    favoriteMovie: [
      {
        title: "Top Gun",
        genre: "action",
        rating: 10,
      },
    ],
  },
];
