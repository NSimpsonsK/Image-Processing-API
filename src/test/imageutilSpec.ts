import imageutil from '../utilities/imageutil';

describe('Tests image processing', () => {
  it('If the wrong Filename is called a missing input error is thrown', async () => {
    await expectAsync(
      imageutil.resizeImage('newyork', 250, 300)
    ).toBeRejectedWithError(Error, 'Input file is missing');
  });

  it('When called with the right filename, width and height parameters it resolves succesfull', async () => {
    await expectAsync(
      imageutil.resizeImage('palmtunnel', 200, 200)
    ).toBeResolved();
  });
});
