// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Moderation extends APIResource {
  /**
   * Moderate
   */
  create(body: ModerationCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/guardrail', { body, ...options });
  }
}

export type ModerationCreateResponse = unknown;

export interface ModerationCreateParams {
  text: string;
}

export declare namespace Moderation {
  export {
    type ModerationCreateResponse as ModerationCreateResponse,
    type ModerationCreateParams as ModerationCreateParams,
  };
}
