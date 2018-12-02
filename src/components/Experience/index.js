import React from 'react'

import data from './data.json'

const Experience = ({ data }) => (
  <section id="experience">
    <h2>{data.title}</h2>

    {data.jobs.map((job, index) => (
      <>
        {index !== 0 && <hr key={`separator-${job.company}`} />}
        <article key={job.company}>
          <h3>{job.title}</h3>
          <div>{job.company}</div>
          <div>
            {job.from} - {job.to}
          </div>
          <p>{job.description}</p>
        </article>
      </>
    ))}
  </section>
)

export default () => Experience({ data })
