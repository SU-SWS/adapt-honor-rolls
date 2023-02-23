import { SelfReportedEthnicity, SelfReportedEthnicityCustom } from '../../services/megaprofile';
/**
 * Utilities for formatting ethnicity
 */

/**
 * This makes sure that selfReportedEthnicity is an array
 * Note: This field is an array of strings in MyAccount,
 * but looks like it might be a string separated by *semicolons for Directory profile
 */
export const ethnicityArray = (selfReportedEthnicity: SelfReportedEthnicity | SelfReportedEthnicity[]) => {
  if (selfReportedEthnicity) {
    if (typeof selfReportedEthnicity === 'string') {
      return selfReportedEthnicity.split(';').map((ethnicity) => ethnicity.trim());
    }
    return selfReportedEthnicity;
  }
  return null;
};

/**
 * selfReportedEthnicityCustom is a string, but it can contain multiple terms separated by commas
 * This function splits the string into an array of strings
 */
export const ethnicityCustomArray = (selfReportedEthnicityCustom: SelfReportedEthnicityCustom) => {
  if (selfReportedEthnicityCustom) {
    return selfReportedEthnicityCustom.split(',').map((ethnicity) => ethnicity.trim());
  }
  return null;
};

/**
 * Combine both ethnicity arrays, sort them alphabetically and join them into a string with commas
 */
export const formatEthnicity = (
  selfReportedEthnicity: SelfReportedEthnicity[] | SelfReportedEthnicity,
  selfReportedEthnicityCustom: string
) => {
  const selfReportedEthnicityArray = ethnicityArray(selfReportedEthnicity);
  const selfReportedEthnicityCustomArray = ethnicityCustomArray(selfReportedEthnicityCustom);

  if (selfReportedEthnicityArray && selfReportedEthnicityCustomArray) {
    return [...selfReportedEthnicityArray, ...selfReportedEthnicityCustomArray]?.sort()?.join(', ');
  }
  if (selfReportedEthnicityArray) {
    return selfReportedEthnicityArray?.slice()?.sort()?.join(', ');
  }
  if (selfReportedEthnicityCustomArray) {
    return selfReportedEthnicityCustomArray?.slice()?.sort()?.join(', ');
  }
  return null;
};
