import React from 'react';
import Helmet from 'react-helmet';
import '../../assets/scss/main.scss';

import Header from '../Header';
import data from './data.json';

const Layout = ({
  children,
  data: { title, description, image, imageAlt, url, type },
}) => (
  <>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta name="og:image:alt" content={imageAlt} />
      <meta name="og:url" content={url} />
      <meta name="og:type" content={type} />
    </Helmet>

    <Header />

    {children}
  </>
);

export default ({ children }) => Layout({ children, data });
