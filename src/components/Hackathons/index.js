import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import data from './data.json';

const Hackathons = ({ data: { title, hackathons } }) => (
  <section id="hackathons">
    <h2>{title}</h2>

    {hackathons.map(({ title, host, date, description }, index) => (
      <React.Fragment key={title}>
        {index !== 0 && <hr />}
        <article>
          <h3>{title}</h3>
          <div>
            <OutboundLink href={host.href}>{host.name}</OutboundLink>. {date}
          </div>
          <p>{description}</p>
        </article>
      </React.Fragment>
    ))}
  </section>
);

export default () => Hackathons({ data });
