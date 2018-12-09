import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import data from './data.json';

const Experience = ({ data: { title, jobs } }) => (
  <section id="experience">
    <h2>{title}</h2>

    {jobs.map(({ title, company, from, to, description }, index) => (
      <React.Fragment key={company.name}>
        {index !== 0 && <hr />}
        <article>
          <h3>{title}</h3>
          <div>
            <OutboundLink href={company.href}>{company.name}</OutboundLink> /{' '}
            {from} - {to}
          </div>
          <p>{description}</p>
        </article>
      </React.Fragment>
    ))}
  </section>
);

export default () => Experience({ data });
