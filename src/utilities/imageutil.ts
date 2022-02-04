import sharp, { Sharp } from 'sharp';
import fs from 'fs';

const resize = (
  inputFile: string,
  width: number,
  heigt: number,
  outputFile: string
): Sharp => {
  if (!resizedFilePresent(inputFile, width ,heigt)) {
    return sharp(inputFile)
      .resize(width, heigt)
      .toFile(outputFile + width + heigt, function (err) {});
  } else {
    return loadImage(inputFile + width + heigt);
  }
};

const resizedFilePresent = (inputFile: string, width:number, height:number): Boolean => {
  if (fs.existsSync("./images/" + inputFile)) {
    return true;
  }
  return false;
};

const filePresent = (inputFile: string): Boolean => {
  if (fs.existsSync("./images/" + inputFile)) {
    return true;
  }
  return false;
};

const loadImage = (inputFile: string): Sharp => {
  return sharp(inputFile);
};

export = {
  resize,
  filePresent
};
