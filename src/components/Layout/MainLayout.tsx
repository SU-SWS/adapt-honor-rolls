import React from 'react';
import { dcnb } from 'cnbuilder';
import Head from 'next/head';
import { Heading } from '../Typography';
import * as styles from './MainLayout.styles';

export type MainLayoutProps = {
  heading?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export const MainLayout = ({
  heading,
  title,
  children,
  className,
  ...rest
}: MainLayoutProps & React.HTMLAttributes<HTMLElement>) => (
  <main {...rest} className={dcnb(styles.root, className)} id="main-content">
    <Head>
      <title>{title || heading}</title>
    </Head>
    {heading && <Heading as="h1">{heading}</Heading>}
    {children}
  </main>
);
