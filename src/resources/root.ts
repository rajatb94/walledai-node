// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'walledai/core';
import { APIResource } from 'walledai/resource';
import * as RootAPI from 'walledai/resources/root';

export class Root extends APIResource {
  /**
   * Read Root
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get('/', options);
  }
}

export type RootRetrieveResponse = unknown;

export namespace Root {
  export import RootRetrieveResponse = RootAPI.RootRetrieveResponse;
}
