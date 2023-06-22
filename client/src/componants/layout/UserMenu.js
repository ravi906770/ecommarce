import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
  return (
    <>
    <div className="text-centre">
    <div className="list-group">
        <h3>DashBoard</h3>
  <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action">Your Profile</NavLink>
  <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">Your Orders</NavLink>
 
</div>
    </div>
   
    
    </>
  )
}

export default UserMenu
