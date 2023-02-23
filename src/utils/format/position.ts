import { format, parse } from 'date-fns';
import { ProfilePosition } from '../../components/Profile/types';

export const formattedIndustries = (position: ProfilePosition) => {
  if (!position?.fieldOfSpeciality1 && !position?.fieldOfSpeciality2 && !position?.fieldOfSpeciality3) {
    return null;
  }
  const industriesArray: string[] = [
    position?.fieldOfSpeciality1,
    position?.fieldOfSpeciality2,
    position?.fieldOfSpeciality3,
  ];

  return industriesArray.filter((industry) => !!industry).sort().join(', ');
};

export const formatStartEndDate = (startDate: string, endDate: (string | null) = null): string => {
  const start: string = format(parse(startDate, 'MM/yyyy', new Date()), 'MMM yyyy');
  const end: string = endDate ? format(parse(endDate, 'MM/yyyy', new Date()), 'MMM yyyy') : 'Present';
  return `${start} – ${end}`;
};
