import express from 'express';
import validateurl from './../../utilities/validurl';
import path from 'path';
import fs from 'fs';
import imageutil from './../../utilities/imageutil';

const images = express.Router();

images.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const test = validateurl.validate(
      req.query.path,
      req.query.width,
      req.query.height
    );
    const name = test[0];
    const width = test[1];
    const height = test[2];

    const thumbdir = imageutil.thumbdir(name, width, height);
    if (!fs.existsSync(thumbdir)) {
      const resizedImage = await imageutil.resizeImage(name, width, height);
      await fs.promises.writeFile(thumbdir, resizedImage);
    }
    res.sendFile(path.resolve(thumbdir));
  } catch (error) {
    const result = (error as Error).message;
    res.send(result);
  }
});

export default images;
