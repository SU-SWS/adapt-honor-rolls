import React from 'react';
import {
  AuthenticatedPage,
  MainLayout,
  LoadingOverlay,
} from '../components';

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
