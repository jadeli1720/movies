//see a list of pre-populated movies
//add a movie to the list
//update movie information
//remove a movie
//see only released movies

const express = require('express');

const server = express();

let actors = [
    {
        id: 1,
        name: 'Elijah Wood',
        movies: [1,2]
    },
    {
        id: 1,
        name: 'Chris Evans',
        movies: [4]
    },
]

let movies = [
    {
        id: 1,
        name: "The Fellowship of the Rings",
        released: true,
        rating: 5
    },
    {
        id: 2,
        name: "The Two Towers",
        released: true,
        rating: 4
    },
    {
        id: 3,
        name: "The Childrin of Hurin",
        released: false,
        rating: null
    },
    {
        id: 4,
        name: "Avengers Endgame",
        released: true,
        rating: 4
    }
]

//sanity check
server.get('/', (req, res) => {
    res.status(200).json({api: 'up...'});
})


server.get('/api/movies', (req, res) => {
    res.status(200).json(movies);
    
  });

  server.get('/api/actors', (req, res) => {
    res.status(200).json(actors);
    
  });

// export default server;// ES2015 modules
module.exports = server //CommonJS modules (node)