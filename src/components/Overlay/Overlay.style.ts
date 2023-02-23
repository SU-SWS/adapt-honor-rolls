import { dcnb } from 'cnbuilder';

export const root = ({ className }: { className: string }) => dcnb(
  'su-flex su-flex-col su-justify-center su-mx-auto su-items-center su-cc children:su-outline-none',
  className
);
export const backdrop = '!su-bg-black !su-bg-opacity-80 su-overflow-y-scroll';
