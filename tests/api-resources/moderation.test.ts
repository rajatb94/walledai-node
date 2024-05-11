// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Walledai from 'walledai';
import { Response } from 'node-fetch';

const walledai = new Walledai({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource moderation', () => {
  test('create: only required params', async () => {
    const responsePromise = walledai.moderation.create({ text: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await walledai.moderation.create({ text: 'string' });
  });
});
