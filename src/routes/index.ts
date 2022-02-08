import express from 'express';
import images from './api/image';
const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send('main api route');
  console.log('/api main api route was visited');
});

routes.use('/image', images);

export default routes;
