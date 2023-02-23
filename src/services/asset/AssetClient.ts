import axios, { AxiosResponse } from 'axios';
import {
  AssetClientConfig,
  AssetToken,
  StoryblokGetAssetPayload,
  GetAssetPayload,
} from './types';

export class AssetClient {
  private assetToken: AssetToken;

  constructor(config: AssetClientConfig = {}) {
    this.assetToken = config.assetToken || process.env.ASSET_CLIENT_ASSET_TOKEN;
  }

  /**
   * Get a signed asset url from a private asset
   */
  public get = async (asset: string): Promise<GetAssetPayload> => {
    const result: AxiosResponse<StoryblokGetAssetPayload, any> = await axios.get<StoryblokGetAssetPayload>(
      `https://api.storyblok.com/v2/cdn/assets/me?token=${this.assetToken}&filename=${asset}`
    );

    const signedUrl: string = result.data.asset.signed_url;
    const payload: GetAssetPayload = { signedUrl };
    return payload;
  };
}
