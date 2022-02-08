import validurl from '../utilities/validurl';

describe('Validate Url', () => {
  it('Validate correct Parameters', async () => {
    const data = await validurl.validate('palmtunnel', '200', '100');
    expect(data).toEqual(['palmtunnel', 200, 100]);
  });
  it('Validate incorrect Parameters which throws an Error', async () => {
    expect(function () {
      return validurl.validate(undefined, '200', '100');
    }).toThrow(new Error('Parameter Filename is not Present'));
  });
});
