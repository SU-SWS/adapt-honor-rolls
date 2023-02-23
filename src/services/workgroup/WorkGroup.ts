import { AuthUser } from 'adapt-auth-sdk';
import axios, { AxiosInstance } from 'axios';
import https from 'https';
import { WorkGroupMember } from './types';

export class WorkGroupClient {
  private httpClient:AxiosInstance;

  constructor() {
    const httpsAgent = new https.Agent({
      cert: process.env.WORKGROUP_API_CERT,
      key: process.env.WORKGROUP_API_KEY,
    });

    const axiosInstance = axios.create({
      baseURL: process.env.WORKGROUP_API_URL || 'https://workgroupsvc.stanford.edu/workgroups/2.0/',
      httpsAgent,
    });

    this.httpClient = axiosInstance;
  }

  public get = async (workgroup: string) => {
    const result = await this.httpClient.get(workgroup);
    if (!result.data) {
      throw new Error('Failed to load workgroup');
    }
    return result.data;
  };

  public userInWorkGroup = async (user: AuthUser, workgroup: string) => {
    const group = await this.get(workgroup);
    const { email } = user;
    const parsedUsername = email.substring(0, email.indexOf('@stanford.edu'));
    const isStaff = !!group.members.find((member: WorkGroupMember) => member.id === parsedUsername);
    return isStaff;
  };
}
