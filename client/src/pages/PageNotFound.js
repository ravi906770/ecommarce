import React from 'react'
import Layout from '../componants/layout/Layout'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <Layout title={"Page Not Found"}>
      <div className="pnf">
        <div className="pnf-title">404</div>
        <div className="pnf-heading">Oops ! Page Not Found</div>
        <Link to="/" className='pnf-btn'>Go Back</Link>
      </div>
    </Layout>
  )
}

export default PageNotFound
