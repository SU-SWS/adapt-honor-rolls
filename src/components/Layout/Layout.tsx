import React, { FC } from 'react';
import { Footer } from '../Footer/Footer';
import { FlexBox, Masthead, Skiplink } from '..';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <FlexBox justifyContent="between" direction="col" className="su-min-h-screen">
    <Skiplink />
    <Masthead />
    {children}
    <Footer />
  </FlexBox>
);

export default Layout;
