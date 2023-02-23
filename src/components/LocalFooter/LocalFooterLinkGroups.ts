import { commonExternalLinks as links } from '../../utils/variables';
import routes from '../../routes';

export interface FooterLink {
  text: string;
  href: string;
}

export const callToActionLinks: FooterLink[] = [
  {
    text: 'Account help',
    href: links.saaHelp,
  },
  {
    text: 'Check your alumni email',
    href: links.saaCheckEmail,
  },
  {
    text: 'Access SAA membership card',
    href: links.saaCard,
  },
  {
    text: 'Request your transcript',
    href: links.transcript,
  },
  {
    text: 'My giving',
    href: links.webGivingHistory,
  },
];

export const featureLinks: FooterLink[] = [
  {
    text: 'Stanford Alumni Association',
    href: links.saa,
  },
  {
    text: 'Alumni Groups',
    href: links.saaGroups,
  },
  {
    text: 'Alumni Honor',
    href: routes.home(),
  },
  {
    text: 'Give to Stanford',
    href: links.give,
  },
  {
    text: 'Honor Rolls',
    href: links.honorRolls,
  },
  {
    text: 'Athletics',
    href: links.athletics,
  },
  {
    text: 'Outreach Volunteer Alumni Link (OVAL)',
    href: links.oval,
  },
];

export const stanfordSchoolLinks: FooterLink[] = [
  {
    text: 'Graduate School of Business',
    href: links.gsb,
  },
  {
    text: 'Graduate School of Education',
    href: links.schoolEd,
  },
  {
    text: 'School of Engineering',
    href: links.schoolEngineering,
  },
  {
    text: 'School of Humanities and Sciences',
    href: links.schoolHumSci,
  },
  {
    text: 'School of Law',
    href: links.schoolLaw,
  },
  {
    text: 'School of Medicine',
    href: links.schoolMed,
  },
  {
    text: 'Stanford Doerr School of Sustainability',
    href: links.schoolEarth,
  },
];

export const legalLinks: FooterLink[] = [
  {
    text: 'Accessibility',
    href: links.saaA11y,
  },
  {
    text: 'Privacy Policy',
    href: links.saaPrivacy,
  },
  {
    text: 'Terms of Use',
    href: links.saaTerms,
  },
  {
    text: 'Code of Conduct',
    href: links.saaCodeofConduct,
  },
];
