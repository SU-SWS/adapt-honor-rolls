export const containerElements = ['div', 'section', 'article', 'main', 'footer', 'aside', 'header', 'nav', 'form'];
export type ContainerElementType = typeof containerElements[number];

export const containerWidths = {
  full: 'su-w-full', // width: 100%; default
  site: 'su-cc', // Use Decanter custom screen margins and sets max content width of 1500px
  honor: 'su-honor-cc', // Use modified centered container for honor rolls with max width of 1800px
  screen: 'su-w-screen', // width: 100vw
};
export type ContainerWidthType = keyof typeof containerWidths;
