import { UrlType } from '../../services/megaprofile';

export const urlTypeTitle = (type: UrlType) => (type.includes(' URL') ? type : `${type} URL`);

// Remove http:// or https:// in front of URL for About Me landing page and Profile page
export const urlClean = (url: string) => url.replace(/^https?:\/\//, '');
