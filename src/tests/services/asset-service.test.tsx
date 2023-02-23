import { AssetClient, GetAssetPayload } from '../../services/asset';

describe('Testing Asset', () => {
  it('Gets signed url', async () => {
    const asset = new AssetClient();
    const filename = 'https://a.storyblok.com/f/148010/800x800/4e034aed8b/business-cat.jpeg';

    const result: GetAssetPayload = await asset.get(filename as string);

    expect(result).toHaveProperty('signedUrl');
    expect(result.signedUrl).toContain('business-cat');
  });
});
