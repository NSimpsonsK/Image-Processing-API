import express from 'express';
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('main api route');
  console.log('/api main api route was visited');
});

export default routes;
