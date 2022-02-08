import express from 'express';
import path from 'path';
import fs from 'fs';
import validateurl from './../../utilities/validurl';
import imageutil from './../../utilities/imageutil';

const images = express.Router();

images.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      const test = validateurl.validate(
        req.query.filename as string,
        req.query.width as string,
        req.query.height as string
      );
      const filename = test[0];
      const width = test[1];
      const height = test[2];

      const thumbdir = imageutil.thumbdir(filename, width, height);
      if (!fs.existsSync(thumbdir)) {
        const resizedImage = await imageutil.resizeImage(
          filename,
          width,
          height
        );
        await fs.promises.writeFile(thumbdir, resizedImage);
      }
      res.status(200).sendFile(path.resolve(thumbdir));
    } catch (error) {
      res.status(400).json((error as Error).toString());
    }
  }
);

export default images;
