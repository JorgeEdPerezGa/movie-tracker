import key from './api/key.js';

export const initialFetch = async() => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`;
  const initialFetch = await fetch(url);
  const response = await initialFetch.json();
  return cleanMovies(response);
};

export const cleanMovies = (response) => {
  const movies = response.results.map(movie => {
    const title = movie.title;
    const overview = movie.overview;
    const poster = movie.poster_path;
    const backdrop = movie.backdrop_path;
    const id = movie.id;
    return {title, overview, poster, backdrop, id};
  });
  return Promise.all(movies);
};

export const registerUser = async user => {
 // const url='/api/users/new'
  const url='localhost:3000/api/users/new'

  const register = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }) 

  return await register.json()
}

export const loginUser = async ({ email, password }) => {
 // const url = '/api/users/'
  const url='http://localhost:3000/api/users'

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({email, password}),
    headers: {
      "Content-Type": "application/json",
    }
  })

  return await response.json()

}