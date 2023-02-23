/* eslint-disable camelcase */
export type SpaceId = string;
export type AssetToken = string;
export type AccessToken = string;

export interface AssetClientConfig {
  spaceId?: SpaceId;
  assetToken?: AssetToken;
  accessToken?: AccessToken;
}

export interface StoryblokGetAssetPayload {
  asset: {
    filename: string;
    created_at: string;
    updated_at: string;
    asset_folder_id?: number;
    content_length?: string;
    content_type?: string;
    alt?: string;
    copyright?: string;
    title?: string;
    focus?: any;
    expire_at?: any;
    signed_url: string;
  }
}
export interface GetAssetPayload {
  signedUrl: string;
}
