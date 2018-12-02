import React from 'react';

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
            <a href={host.href}>{host.name}</a>. {date}
          </div>
          <p>{description}</p>
        </article>
      </>
    ))}
  </section>
);

export default () => Experience({ data });
