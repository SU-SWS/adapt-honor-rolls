import React from 'react';
import { MainLayout } from '../components/Layout/MainLayout';
import { LoadingOverlay } from '../components/Overlay/LoadingOverlay';
import { AuthenticatedPage } from '../components/auth/AuthenticatedPage';

const Home = () => (
  <AuthenticatedPage
    authenticatingComponent={<LoadingOverlay label="Finalizing your login..." open />}
  >
    <MainLayout
      title="Honor Rolls"
      data-testid="home"
    >
      <p>The beginning of something great.</p>
    </MainLayout>
  </AuthenticatedPage>
);
export default Home;
