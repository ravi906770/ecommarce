import React from 'react'
import Layout from '../../componants/layout/Layout'
import UserMenu from '../../componants/layout/UserMenu'
import { useAuth } from '../../context/auth'

const Dashboard = () => {

  const [auth] = useAuth();

  return (
    <div>
        <Layout title={"Dashboard-Ecommarce App"}>
        <div className="container-fluid m-3 p-3">
        <div className="row">
            <div className="col-md-3">
                <UserMenu/>
            </div>
            <div className="col-md-9">
                <div className="card w-75">
                  <h3>Your Name : {auth?.user?.name}</h3>
                  <h3>Your Email : {auth?.user?.email}</h3>
                  <h3>Your Phone : {auth?.user?.phone}</h3>
                  <h3>Your Address : {auth?.user?.address}</h3>
                </div>
            </div>
        </div>
     </div>
      </Layout>
    </div>
  )
}

export default Dashboard
