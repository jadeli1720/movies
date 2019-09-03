Steps:

Terminal:

1. git status
2. mkdir folderName
3. cd folderName
4. git init
5. npm init -y
6. code .
7. npm i nodemon -D <- install nodemon as a development time dependency>


endpoint (url + http method ) === function

POST /api/movies (body:movie) === postApiMovies(movie)

| non REST         | REST                   |
| :--------------- |:---------------------- |
| /createMovie     | POST /api/movies       |
| /removeMovie/:id | DELETE /api/movies/:id |

Other Approaches to building Web API: 

- GraphQL
- gRPC
- RPC
- SOAP