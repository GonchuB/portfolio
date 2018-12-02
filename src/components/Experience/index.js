import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import data from './data.json';

const Experience = ({ data: { title, jobs } }) => (
  <section id="experience">
    <h2>{title}</h2>

    {jobs.map(({ title, company, from, to, description }, index) => (
      <>
        {index !== 0 && <hr key={`separator-${company.name}`} />}
        <article key={company.name}>
          <h3>{title}</h3>
          <div>
            <OutboundLink href={company.href}>{company.name}</OutboundLink> /{' '}
            {from} - {to}
          </div>
          <p>{description}</p>
        </article>
      </>
    ))}
  </section>
);

export default () => Experience({ data });
