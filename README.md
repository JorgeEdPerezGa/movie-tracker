# Movie Tracker

## Synopsis

Movie Tracker is a group project that works off The Movie DB API and incorporates our own API to save user information. We had one week to build an application that pulled in the most recent movies from The Movie DB API. Our API allows a user to register and then log in when they return. Also a user can favorite movies, which is then saved in our API so that a user can view their list when they log in again. We also did an extension where a user can click and view more details about any individual movie. The application was built in React.js and Redux. Our testing suites were built using Jest and Enzyme.

## Project Goals

* Create modular React components
* Connect components to Redux store
* Test components from both a unit and acceptance standpoint
* Design an appealing and user friendly app

## Installation

First, clone down the backend repo: (https://github.com/jjlljj/movie-tracker-backend)

`npm install`
`npm run build`
Make sure to have postgresql installed then initialize the database with the following:
`psql -f ./database/users.sql`
`npm start` on http://localhost:3000/

Second, clone down this repo and run

`npm install`
`npm start` on http://localhost:3001/

## API Reference

We used The Movie DB API (https://www.themoviedb.org/documentation/api)

## Tests

Run `npm test` in the root directory

## Contributors

Amanda Tjan, James Logue and Jorge Ed PerezGa are the project developers.

## Project Layout

![movie tracker layout](./public/MovieTrackerScreenshot.png)


