import { NextApiRequest, NextApiResponse } from 'next';
import connect, { NextConnect } from 'next-connect';
import { WithAuthUser } from 'adapt-auth-sdk';
import { auth } from '../../../utils/authInstance';
import {
  AssetClient,
  GetAssetPayload as AssetClientGetAssetPayload,
} from '../../../services/asset';
import { ExceptionHandler, BadRequestException } from '../../../utils/ApiException';

export type GetAssetPayload = AssetClientGetAssetPayload;

export const getAssetHandler = async (
  req: WithAuthUser<NextApiRequest>,
  res: NextApiResponse
) => {
  const asset = new AssetClient();

  const { filename } = req.query;

  if (!filename) {
    return BadRequestException(res, 'Invalid asset request');
  }

  try {
    const result: GetAssetPayload = await asset.get(filename as string);

    return res.status(200).json(result);
  } catch (error) {
    return ExceptionHandler(res, error);
  }
};

const handler: NextConnect<NextApiRequest, NextApiResponse<any>> = connect<NextApiRequest, NextApiResponse>()
  .use(auth.authorize())
  .get(getAssetHandler);

export default handler;
