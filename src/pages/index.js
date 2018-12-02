import React from 'react'

import Layout from '../components/Layout'
import Summary from '../components/Summary'
import Experience from '../components/Experience'

const Home = ({ data }) => (
  <Layout>
    <div id="main">
      <Summary />

      <Experience />
    </div>
  </Layout>
)

export default () => Home({ data: null })
