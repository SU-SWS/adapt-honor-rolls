import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { ApiGatewayAuth, AuthClient } from '../api-gateway-auth';
// DTOs
import { MegaProfileAPI } from './types';

// TODO: ADAPT-4840 - This is all temporary and mocked. Fix this once the RAML is resolved
export interface VerifyRegistrationDTO {
  lastName: string;
  SUID: string;
}
export interface VerifyRegistrationResponse {
  email?: string;
  encodedSUID: string;
}

export interface MegaProfileConfig {
  url?: string;
  host?: string;
  path?: string;
  auth?: AuthClient;
}

export class MegaProfile {
  // Base URL of megaprofile api
  private url: string;

  // Auth configuration
  public auth: AuthClient;

  // Stored configured http client
  public client: AxiosInstance;

  constructor(config: MegaProfileConfig = {}) {
    // Set variables
    const host = config.host || process.env.MEGAPROFILE_HOST;
    const path = config.path || process.env.MEGAPROFILE_PATH;
    const builtUrl = `${host}${path}`;
    this.url = config.url || process.env.MEGAPROFILE_URL || builtUrl || 'http://localhost:8001/megaprofile';
    this.auth = config.auth || new ApiGatewayAuth();

    // Create Client
    this.client = axios.create({
      baseURL: this.url,
      // Other request defaults? Headers?
    });
    if (this.auth.isAuthenticated()) {
      this.setClientAuth();
    }
  }

  private setClientAuth = () => {
    this.client.defaults.headers.common.Authorization = `Bearer ${this.auth?.token?.access_token}`;
  };

  // NOTE: The API currently responds with 404 status for empty collection requests...
  // The only difference between the empty response and resource not found is the presence
  // of a response body. We intercept that 404 response here to avoid having those
  // errors propagate through our code. @see ADAPT-4618
  // eslint-disable-next-line class-methods-use-this
  public handleEmptyResponse = async <T = any, R = T>(requestHandler: () => Promise<T>, emptyResponse: R) => {
    try {
      const result = await requestHandler();

      return result;
    } catch (err) {
      const axErr = err as AxiosError;
      if (axErr?.response?.status === 404 && axErr?.response?.data) {
        return emptyResponse;
      }

      // Rethrow the error if it's not our "empty response 404"
      throw err;
    }
  };

  /**
   * Auth handler
   */
  public authenticate = async () => {
    await this.auth.authenticate();
    this.setClientAuth();
  };

  /**
   * Helper to recursively remove null attribute values
   */
  public removeNullValues = <T = any>(data: T) => {
    // Handle arrays
    if (Array.isArray(data)) {
      return data.map((item) => this.removeNullValues(item));
    }

    // We really only need to handle nulled object values
    if (typeof data === 'object' && data !== null) {
      return Object.keys(data).reduce((cleanedObj, attribute) => ({
        ...cleanedObj,
        ...(data[attribute] === null ? {} : { [attribute]: this.removeNullValues(data[attribute]) }),
      }), {} as T);
    }

    // Everything else is fine
    return data;
  };

  // Generic request handler w/ auth check
  public request = async <T = any>(config: AxiosRequestConfig = {}) => {
    // Don't send null values
    if (config.data) {
      config.data = this.removeNullValues(config.data);
    }

    // Check authentication first
    if (!this.auth.isAuthenticated()) {
      await this.authenticate();
    }

    const result = await this.client.request<T>(config);
    return result.data;
  };

  // Method wrapped request handlers
  public get = async <T = any>(url: string, config: AxiosRequestConfig = {}) => this.request<T>({ ...config, method: 'GET', url });

  public post = async <T = any, D = any>(url: string, data: D, config: AxiosRequestConfig = {}) => this.request<T>({
    ...config,
    method: 'POST',
    url,
    data,
  });

  public put = async <T = any, D = any>(url: string, data: D, config: AxiosRequestConfig = {}) => this.request<T>({
    ...config,
    method: 'PUT',
    url,
    data,
  });

  public patch = async <T = any, D = any>(url: string, data: D, config: AxiosRequestConfig = {}) => this.request<T>({
    ...config,
    method: 'PATCH',
    url,
    data,
  });

  public delete = async <T = any>(url: string, config: AxiosRequestConfig = {}) => this.request<T>({ ...config, method: 'DELETE', url });

  // Endpoint Handlers
  // NOTE: Add additional handlers on an as-needed basis with response types generated from api spec in ./types.ts

  /**
   * Affiliations endpoint
   */
  public getAffiliations = async (encodedSUID: string) => (
    this.get<MegaProfileAPI['GetAffiliationsSuccessResponseDTO']>(`/v1/constituents/${encodedSUID}/profiles/affiliations`)
  );

  /**
   * Contact endpoints
   */
  public getContact = async (encodedSUID: string) => this.get<MegaProfileAPI['GetContactSuccessResponseDTO']>(
    `/v1/constituents/${encodedSUID}/profiles/contact`
  );
}
