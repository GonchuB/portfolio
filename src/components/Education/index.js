import React from 'react';

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
            <a href={place.href}>{place.name}</a> / {from} - {to}
          </div>
          <p>{description}</p>
        </article>
      </>
    ))}
  </section>
);

export default () => Education({ data });
