import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import data from './data.json';

const Articles = ({ data: { title, articles } }) => (
  <section id="articles">
    <h2>{title}</h2>

    {articles.map(({ title, date, uri }) => (
      <article key={title}>
        <OutboundLink target="_blank" href={uri}>
          {title}
        </OutboundLink>
        . {date}
      </article>
    ))}
  </section>
);

export default () => Articles({ data });
