import sharp, { Sharp } from 'sharp';
import express from 'express';
import fs from 'fs';

function isNumeric(val: string) {
  return /^-?\d+$/.test(val);
}

const validate = (
  path: unknown,
  width: unknown,
  height: unknown
): [string, number, number] => {
  let parsedwidth: number;
  let parsedheight: number;
  let errorMessage: string = '';
  let parameters: string[] = [];
  if (path == undefined) {
    parameters.push('Path');
  }
  if (width == undefined) {
    parameters.push('Width');
  }
  if (height == undefined) {
    parameters.push('Height');
  }
  if (parameters.length > 0) {
    if (parameters.length == 1) {
      errorMessage = 'Parameter ' + parameters[0] + ' is not Present';
    } else {
      errorMessage = 'Parameter ' + parameters[0];
      for (let index = 1; index < parameters.length; index++) {
        const element = parameters[index];
        errorMessage += ', ' + parameters[index] + ' ';
      }
      errorMessage += 'is not Present';
    }
  }

  console.log(isNumeric(width as string) && isNumeric(height as string));
  if (errorMessage == '') {
    if (!isNumeric(width as string) && !isNumeric(height as string)) {
      errorMessage += 'Parameter Width and Height is not a Number';
    } else if (!isNumeric(width as string)) {
      errorMessage += 'Parameter Width is not a Number';
    } else if (!isNumeric(height as string)) {
      errorMessage += 'Parameter Height is not a Number';
    }
  }

  if (errorMessage != '') {
    throw new Error(errorMessage);
  } else {
    return [
      path as string,
      parseInt(width as string),
      parseInt(height as string)
    ];
  }
};

export = {
  validate
};
