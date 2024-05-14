// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as ModerationAPI from './moderation';

export class Moderation extends APIResource {
  /**
   * Moderate
   */
  create(body: ModerationCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/api/moderation/', { body, ...options });
  }
}

export type ModerationCreateResponse = unknown;

export interface ModerationCreateParams {
  text: string;
}

export namespace Moderation {
  export import ModerationCreateResponse = ModerationAPI.ModerationCreateResponse;
  export import ModerationCreateParams = ModerationAPI.ModerationCreateParams;
}
