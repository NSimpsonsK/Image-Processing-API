import sharp, { Sharp } from 'sharp';
import fs from 'fs';
import path from 'path';

function resizeImage(
  name: string,
  width: number,
  height: number
): Promise<Buffer> {
  return sharp(path.resolve(`assets/full/${name}.jpg`))
    .resize({
      width: width,
      height: height
    })
    .toBuffer();
}

function thumbdir(name: string, width: number, height: number): string {
  return `assets/thumb/${name}-${width}-${height}.jpg`;
}

export = {
  resizeImage,
  thumbdir
};
