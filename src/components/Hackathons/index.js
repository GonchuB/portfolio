import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import data from './data.json';

const Experience = ({ data: { title, jobs } }) => (
  <section id="experience">
    <h2>{title}</h2>

    {jobs.map(({ title, host, date, description }, index) => (
      <>
        {index !== 0 && <hr key={`separator-${title}`} />}
        <article key={title}>
          <h3>{title}</h3>
          <div>
            <OutboundLink href={host.href}>{host.name}</OutboundLink>. {date}
          </div>
          <p>{description}</p>
        </article>
      </>
    ))}
  </section>
);

export default () => Experience({ data });
