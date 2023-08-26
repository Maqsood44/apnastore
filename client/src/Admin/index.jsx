import React from 'react'
import SideBar from './Commponents/SideBar';
import './style.css'
import Admin_Order from './Pages/Admin_Order';
import Admin_Product from './Pages/Admin_Product'
import AdminCategory from './Pages/AdminCategory'
import Dashboard from './Pages/Dashboard'
import { Route, Routes } from "react-router-dom";
import { BsDashCircle } from 'react-icons/bs';

export default function Admin() {
    return (
        <>
            <div className="row m-0 p-0">
            <div className="col-md-3" style={{ height: '100vh' }}>
                <SideBar />
            </div>
            <div className="col-md-9">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/admin-category" element={<AdminCategory />} />
                    <Route path="/admin-products" element={<Admin_Product />} />
                    <Route path="/admin-order" element={<Admin_Order />} />

                </Routes>
            </div>
        </div>
        </>
    
    )
}
