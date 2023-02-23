import { dcnb } from 'cnbuilder';

export type menuOpenedType = {
  menuOpened: boolean;
};

export const root = 'su-z-10 md:su-relative';
export const button = 'su-group su-flex su-items-center su-leading-display hocus:su-no-underline su-outline-none';
export const greeting = 'su-hidden xl:su-inline-block su-text-16 su-leading-none group-hover:su-underline group-focus-within:su-underline su-max-w-300';
export const circle = 'su-shrink-0 su-w-32 su-h-32 su-leading-[2.8rem] sm:su-w-[3.8rem] sm:su-h-[3.8rem] sm:su-leading-[3.4rem] xl:su-ml-10 su-text-24 su-font-regular su-rounded-full children:children:group-hocus:su-border-black-10 children:children:group-hocus:su-bg-cardinal-red-xdark';
export const menuWrapper = ({ menuOpened }: menuOpenedType) => dcnb('su-absolute su-right-0 su-break-words su-cc su-w-full md:su-w-[38rem] su-transform-gpu su-transition su-origin-top md:su-origin-top-right su-bg-cardinal-red-xdark su-shadow-lg md:su-rounded-[4px] su-rs-px-1 su-rs-pt-2 su-rs-pb-1 su-mt-[2.8rem] sm:su-mt-12', {
  'su-scale-y-0 md:su-scale-x-0 su-opacity-0 su-invisible': !menuOpened,
  'su-scale-y-100 md:su-scale-x-100 su-opacity-100 su-visible': menuOpened,
});
export const menuHeader = 'su-px-26 lg:su-px-18 su-rs-pb-1';
export const ctaGroup = 'su-mt-3 children:su-border-digital-red children:su-border-r-2';
export const circleInMenu = 'su-shrink-0 su-mr-10 su-w-[5.8rem] su-h-[5.8rem]';
export const nameInMenu = 'su-text-black-10 su-leading-tight';
export const menu = 'su-relative su-list-unstyled su-border-t su-border-digital-red-xlight children:su-mb-0 su-divide-y su-divide-cardinal-red-light';
export const menu2 = 'su-relative children:su-mb-0 su-list-unstyled su-border-t su-border-digital-red-xlight su-pt-14';

// Desktop only styles
export const listItemDivider = 'lg:su-border-t su-border-t-digital-red lg:su-pt-16';
export const listItemBeforeDivider = 'lg:su-pb-16';

// Mobile only styles
export const drawer = '!su-w-full sm:!su-w-400';
export const closeButtonWrapper = 'su-pt-20 su-px-[2.2rem] su-pb-6 su-bg-cardinal-red-xdark';
export const closeButton = 'su-flex su-items-center su-justify-center su-w-30 su-h-30 su-rounded-full hocus:su-bg-digital-red-light su-ml-auto su-mr-0 su-text-white su-text-24';
export const menuWrapperMobile = 'su-h-full su-break-words su-bg-cardinal-red-xdark';
