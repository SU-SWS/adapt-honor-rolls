import { NextApiRequest, NextApiResponse } from 'next';
import connect, { NextConnect } from 'next-connect';
import { WithAuthUser } from 'adapt-auth-sdk';
import { auth } from '../../utils/authInstance';
import { ExceptionHandler, NotFoundException } from '../../utils/ApiException';
import {
  MegaProfile,
  GetContactSuccessResponseDTO,
} from '../../services/megaprofile';

export type GetContactResponse = GetContactSuccessResponseDTO['contact'];
export type Contact = GetContactResponse;

export const getContactHandler = async (req: WithAuthUser<NextApiRequest>, res: NextApiResponse) => {
  const mp = new MegaProfile();

  try {
    const { contact } = await mp.getContact(req?.user?.encodedSUID);

    if (!contact) return NotFoundException(res);

    return res.json(contact);
  } catch (getContactErr) {
    return ExceptionHandler(res, getContactErr);
  }
};

const handler: NextConnect<NextApiRequest, NextApiResponse<any>> = connect<NextApiRequest, NextApiResponse>()
  .use(auth.authorize())
  .get(getContactHandler);

export default handler;
