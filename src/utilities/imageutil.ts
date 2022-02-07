import sharp, { Sharp } from 'sharp';
import fs from 'fs';

function resizeImage(
  fulldir: string,
  thumbdir: string,
  width: number,
  height: number
): Sharp {
  try {
    return sharp(fulldir)
      .resize(width, height)
      .toFile(thumbdir, function (err) {});
  } catch (error) {
    console.log(error);
    throw new Error(error as string);
  }
}

const resizedFilePresent = (thumbdir: string): Boolean => {
  if (fs.existsSync(thumbdir)) {
    return true;
  }
  return false;
};

const filePresent = (inputFile: string): Boolean => {
  if (fs.existsSync('./assets/full/' + inputFile)) {
    return true;
  }
  return false;
};

const loadImage = (thumbdir: string): Sharp => {
  return sharp(thumbdir);
};

const processImage = (inputFile: string, width: number, height: number) => {
  const url: string = inputFile.split('.')[0];
  const extension: string = inputFile.split('.')[1];
  const fulldir = `./assets/full/${inputFile}`;
  const thumbdir = `./assets/thumb/${url}-${width}-${height}.${extension}`;
  if (!resizedFilePresent(thumbdir)) {
    console.log(`resizing Image`);
    resizeImage(fulldir, thumbdir, width, height);
  } else {
    console.log('Found Image, no resizing needed');
    return loadImage(thumbdir);
  }
};

export = {
  processImage,
  filePresent,
  resizedFilePresent
};
