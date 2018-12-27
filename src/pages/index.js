import React from 'react';

import Layout from '../components/Layout';
import Summary from '../components/Summary';
import Articles from '../components/Articles';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Hackathons from '../components/Hackathons';

const Home = () => (
  <Layout>
    <div id="main">
      <Summary />
      <Articles />
      <Experience />
      <Education />
      <Hackathons />
    </div>
  </Layout>
);

export default Home;
