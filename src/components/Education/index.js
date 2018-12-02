import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import data from './data.json';

const Education = ({ data: { title, education } }) => (
  <section id="education">
    <h2>{title}</h2>

    {education.map(({ degree, place, from, to, description }, index) => (
      <>
        {index !== 0 && <hr key={`separator-${degree}`} />}
        <article key={degree}>
          <h3>{degree}</h3>
          <div>
            <OutboundLink href={place.href}>{place.name}</OutboundLink> / {from}{' '}
            - {to}
          </div>
          <p>{description}</p>
        </article>
      </>
    ))}
  </section>
);

export default () => Education({ data });
