import { colorVariants, ColorVariant } from './Spinner.levers';

export const wrapper = 'su-relative';
export const background = 'su-absolute children:su-text-black-20';
export const root = ({ color }: { color: ColorVariant }) => colorVariants[color];
