import React from 'react';

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
            <a href={company.href}>{company.name}</a> / {from} - {to}
          </div>
          <p>{description}</p>
        </article>
      </>
    ))}
  </section>
);

export default () => Experience({ data });
