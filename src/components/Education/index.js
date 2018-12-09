import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import data from './data.json';

const Education = ({ data: { title, education } }) => (
  <section id="education">
    <h2>{title}</h2>

    {education.map(({ degree, place, from, to, description }, index) => (
      <React.Fragment key={degree}>
        {index !== 0 && <hr />}
        <article>
          <h3>{degree}</h3>
          <div>
            <OutboundLink href={place.href}>{place.name}</OutboundLink> / {from}{' '}
            - {to}
          </div>
          <p>{description}</p>
        </article>
      </React.Fragment>
    ))}
  </section>
);

export default () => Education({ data });
