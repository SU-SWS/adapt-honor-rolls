import { dcnb } from 'cnbuilder';

export const imageColors = {
  'digital-red-xlight': {
    border: 'su-border-digital-red-xlight su-bg-digital-red-xlight',
  },
};
export type ImageColorType = keyof typeof imageColors;

export const initialColors = {
  grey: {
    text: 'su-text-digital-red',
    border: 'su-border-black-20',
  },
  // User menu button open state
  'digital-red-xlight-red-text': {
    text: 'su-text-digital-red',
    border: 'su-border-digital-red-xlight',
  },
  // Avatar inside user menu
  'digital-red-xlight': {
    text: 'su-text-white',
    border: 'su-border-digital-red-xlight',
  },
};
export type InitialColorType = keyof typeof initialColors;

export const initialSizes = {
  personCard: 'su-text-[3.6rem] md:su-text-[5rem]',
  profile: 'su-text-[4rem] md:su-text-[7rem] lg:su-text-[9rem]',
  masthead: 'su-text-18 sm:su-text-21',
  userMenu: 'su-text-[3rem]',
};
export type InitialSizeType = keyof typeof initialSizes;

export const borderWidths = {
  2: 'su-border-2',
  3: 'su-border-3',
  4: 'su-border-4',
};
export type BorderWidthType = keyof typeof borderWidths;

export const root = 'su-relative su-aspect-w-1 su-aspect-h-1 su-group';
export const imageCircle = ({
  border = true,
  borderWidth = 2,
  imageColor = 'digital-red-xlight',
}: {
  imageColor?: ImageColorType;
  border?: boolean;
  borderWidth?: BorderWidthType;
} = {}) => dcnb(
  'su-rounded-full su-overflow-hidden su-transition-colors su-w-full',
  border ? `${borderWidths[borderWidth]} ${imageColors[imageColor].border}` : ''
);
export const img = 'su-object-cover';

export const initialCircle = ({
  borderWidth = 2,
  initialColor = 'grey',
}: {
  initialColor?: InitialColorType;
  borderWidth?: BorderWidthType;
} = {}) => dcnb(
  'su-rounded-full su-overflow-hidden su-transition-colors su-w-full',
  borderWidths[borderWidth],
  initialColors[initialColor].border
);
export const initialText = (
  initialColor: InitialColorType,
  initialSize: InitialSizeType
) => dcnb('su-leading-none', initialColors[initialColor]?.text, initialSizes[initialSize]);
