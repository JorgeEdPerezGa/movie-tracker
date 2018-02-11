export const deleteFavorite = (movie, user) => fetch(movie, user)
export const postFavorite = (movie, user) => fetch(movie, user)
export const cleanFavorites = () => {
  return [
    {
      "backdrop_path": "/dddddd.jpg",
      "movie_id": 354912,
      "overview": "Despite his famil...",
      "poster_path": "/ffff.jpg",
      "release_date": "2017-10-27",
      "title": "Coco",
      "vote_average": 7.7,
      "favorite": true
    }
  ];
}
export const postUser = (user) => {
  fetch(user)
  return {
    data: {
      email: "fake@123.com",
      id: 2,
      name: "ted",
      password: "pw123"
    }
  }
}

export const retrieveFavorites = (userId) => {
  fetch(userId)
  return [
    {
      "backdrop_path": "/dddddd.jpg",
      "movie_id": 354912,
      "overview": "Despite his famil...",
      "poster_path": "/ffff.jpg",
      "release_date": "2017-10-27",
      "title": "Coco",
      "vote_average": 7.7,
      "favorite": true
    }
  ]
}

export const registerUser = (user) => {
  fetch(user)
  return {
    error: 'message'
  }
}