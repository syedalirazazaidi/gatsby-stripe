import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Booking from '../components/booking/main';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Booking />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
