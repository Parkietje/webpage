import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AdminPage = () => (
  <Layout>
    <h1>Hi from the admin page</h1>
    <p>Welcome to admin page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AdminPage
