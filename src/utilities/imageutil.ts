import sharp, { Sharp } from 'sharp';
import fs from 'fs';

async function resizeImage(inputFile: string, width: number, height: number) {
  try {
    const url: string = inputFile.split('.')[0];
    const extension: string = inputFile.split('.')[1];
    await sharp(`./assets/full/${inputFile}`)
      .resize(width, height)
      .toFile(
        `./assets/thumb/${url}-${width}-${height}.${extension}`,
        function (err) {}
      );
  } catch (error) {
    console.log(error);
  }
}

const processImage = (inputFile: string, width: number, height: number) => {
  if (!resizedFilePresent(inputFile, width, height)) {
    console.log(`resizing `);
    resizeImage(inputFile, width, height);
  } else {
    console.log('Found Image so no need to resize');
    return loadImage(inputFile + width + height);
  }
};

const resizedFilePresent = (
  inputFile: string,
  width: number,
  height: number
): Boolean => {
  const url: string = inputFile.split('.')[0];
  const extension: string = inputFile.split('.')[1];
  if (
    fs.existsSync(
      './assets/thumb/' + url + '-' + width + '-' + height + '.' + extension
    )
  ) {
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

const loadImage = (inputFile: string): Sharp => {
  return sharp(inputFile);
};

export = {
  processImage,
  filePresent,
  resizedFilePresent
};
