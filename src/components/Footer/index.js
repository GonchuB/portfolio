import React from 'react';

import data from './data.json';

const Footer = ({ data }) => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        {data.social.map(channel => (
          <li key={channel.label}>
            <a
              href={channel.href}
              className={`icon ${channel.icon}`}
              aria-label={channel.ariaLabel}
            >
              <span className="label">{channel.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default () => Footer({ data });
