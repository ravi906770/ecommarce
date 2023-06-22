import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <>
    <div className="text-centre">
    <div className="list-group">
        <h3>Admin Panel</h3>
  <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action">Create Category</NavLink>
  <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action">Create Product</NavLink>
  <NavLink to="/dashboard/admin/products" className="list-group-item list-group-item-action">All Product</NavLink>
  <NavLink to="/dashboard/admin/orders" className="list-group-item list-group-item-action">All Orders</NavLink>
  <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action">Users</NavLink>
 
</div>
    </div>
   
    
    </>
  )
}

export default AdminMenu
