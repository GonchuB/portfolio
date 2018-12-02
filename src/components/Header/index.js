import React from 'react'

import Footer from '../Footer'
import avatar from '../../assets/images/avatar.jpeg'

import data from './data.json'

const Header = ({ data }) => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>{data.name}</strong>
        {data.description}
        <br />
        {data.headline}
      </h1>
    </div>
    <Footer />
  </header>
)

export default () => Header({ data })
