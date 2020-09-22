const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('returns the text: hi', async() => {
    const response = await request(app)
      .get('/');
        
    expect(response.text)
      .toEqual('hi');
  });
});

