import { NextApiRequest, NextApiResponse } from 'next';
import connect, { NextConnect } from 'next-connect';
import { WithAuthUser } from 'adapt-auth-sdk';
import { auth } from '../../utils/authInstance';
import { ExceptionHandler, NotFoundException } from '../../utils/ApiException';
import {
  MegaProfile,
  GetAffiliationsSuccessResponseDTO,
} from '../../services/megaprofile';

export type GetAffiliationsResponse = GetAffiliationsSuccessResponseDTO;

export const getAffiliationsHandler = async (req: WithAuthUser<NextApiRequest>, res: NextApiResponse) => {
  const mp = new MegaProfile();

  try {
    const result: GetAffiliationsResponse = await mp.getAffiliations(req?.user?.encodedSUID);

    if (!result) return NotFoundException(res);

    return res.json(result);
  } catch (getBiosErr) {
    return ExceptionHandler(res, getBiosErr);
  }
};

const handler: NextConnect<NextApiRequest, NextApiResponse<any>> = connect<NextApiRequest, NextApiResponse>()
  .use(auth.authorize())
  .get(getAffiliationsHandler);

export default handler;
