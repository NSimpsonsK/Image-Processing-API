# Image-Processing-API

## Install Dependencies
npm install

## Available Scripts:
- npm run build (Builds the code from Typescript in the dist Folder)
- npm run start (Starts the Server)
- npm run jasmine (Starts the tests)
- npm run test  (The Code will be build and the Tests startet)
- npm run lint  (The Code will be linted with ESLint)
- npm run prettier (The Code will be formatted with Prettier)

## Available Images:
- encenadaport
- fjord
- icelandwaterfall
- palmtunnel
- santamonica

## Using the Api

The API uses 3 Parameters with the Base URL of http://localhost:3000/api/image

| Parameter  | Value           | 
| ---------- |:-------------:| 
| filename   | Name of one of the available image |
| width      | numeric value in Pixel > 0      |  
| height     | numeric value in Pixel > 0     |  

This would be an correct Api Call:
http://localhost:3000/api/image?filename=palmtunnel&width=200&height=100
