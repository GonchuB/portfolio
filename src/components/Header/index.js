import React from 'react';

import Footer from '../Footer';
import avatar from '../../assets/images/avatar.jpg';

import data from './data.json';

const Header = ({ data }) => (
  <header id="header">
    <div className="inner">
      <div className="image avatar">
        <img src={avatar} alt="" />
      </div>
      <h1>
        <strong>{data.name}</strong>
        {data.description}
        <br />
        {data.headline}
      </h1>
    </div>
    <Footer />
  </header>
);

export default () => Header({ data });
