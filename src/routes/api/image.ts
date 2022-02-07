import express from 'express';
import validateurl from './../../utilities/validurl';
import imageutil from './../../utilities/imageutil';
const images = express.Router();

images.get('/', (req, res) => {
  try {
    const test = validateurl.validate(
      req.query.path,
      req.query.width,
      req.query.height
    );
    imageutil.processImage(test[0], test[1], test[2]);
    res.send('All Parameters Valid');
  } catch (error) {
    const result = (error as Error).message;
    res.send(result);
  }
});

export default images;
