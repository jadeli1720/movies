//see a list of pre-populated movies
//add a movie to the list
//update movie information
//remove a movie
//see only released movies

const express = require('express');

const server = express();

server.use(express.json())//teaches express to parse JSON body

let actorId = 3;
let movieId = 5;

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
    const minRating = req.query.minrating;

   // if the client provides a minrating, filter the response
    let result = [...movies];

    if (minRating) {
        result = movies.filter(m => m.rating >= minRating);
    }

    res.status(200).json(movies);
    
  });

  //adding a movie
  server.post('/api/movies', (req, res) => {
    const movie = req.body; //object

    //add the new id"
    movie.id = movieId++;
    movies.push(movie);

    //return correct http status code for operation
    res.status(201).json(movies);
    
  });

  //deleting a movie
  server.delete('/api/movies/:id', (req, res) => {
      const id = req.params.id;
      movies = movies.filter(m => m.id !== Number(id));

      res.status(200).json(movies)
  })

  // get movies of a certain rating

  server.get('/api/movies/', (req, res) => {

  })

  server.get('/api/actors', (req, res) => {
    res.status(200).json(actors);
    
  });

// export default server;// ES2015 modules
module.exports = server //CommonJS modules (node)