import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import CustomPage from '../components/customerror/main';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <CustomPage />
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
