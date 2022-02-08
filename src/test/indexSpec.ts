import app from '../index';
import supertest from 'supertest';

const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe('API Test: /api/image', (): void => {
  it('gets /api/image?height=100&filename=palmtunnel&width=201', async (): Promise<void> => {
    const response: supertest.Response = await request.get(
      '/api/image?height=100&filename=palmtunnel&width=201'
    );
    expect(response.status).toBe(200);
  });
});
