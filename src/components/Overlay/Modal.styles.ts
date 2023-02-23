export const root = 'su-flex su-flex-col su-items-center su-justify-center su-w-[90vw] md:su-w-700 last:children:su-mb-0';
export const padding = {
  default: 'su-rs-pt-2 su-rs-px-3 su-rs-pb-4',
  small: '', // Use BasicCard default padding for small option
  updateProfile: '!su-rs-pt-0 !su-rs-px-0 !su-rs-pb-4',
};
export type PaddingType = keyof typeof padding;
export const closeBtn = 'su-w-full su-rs-mb-2';
export const heading = 'su-mb-04em';
export const contentAlign = {
  left: 'su-self-start su-w-full',
  center: 'su-self-center su-text-center su-w-full',
};
export type ContentAlignType = keyof typeof contentAlign;
