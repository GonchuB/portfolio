import React from 'react'

import data from './data.json'

const Header = ({ data: { title, description } }) => (
  <section id="summary">
    <header className="major">
      <h2>{title}</h2>
    </header>
    <p>{description}</p>
  </section>
)

export default () => Header({ data })
