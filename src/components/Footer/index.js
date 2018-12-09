import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import data from './data.json';

const Footer = ({ data }) => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        {data.social.map(channel => (
          <li key={channel.label}>
            <OutboundLink href={channel.href} aria-label={channel.ariaLabel}>
              <span className="label">{channel.label}</span>
            </OutboundLink>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default () => Footer({ data });
