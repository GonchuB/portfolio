import React from 'react';
import Helmet from 'react-helmet';
import '../../assets/scss/main.scss';

import Header from '../Header';
import data from './data.json';

const Layout = ({ children, data: { title, description } }) => (
  <>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>

    <Header />

    {children}
  </>
);

export default ({ children }) => Layout({ children, data });
