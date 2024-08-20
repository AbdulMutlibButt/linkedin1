import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
const Sidebar = () => {

    const recentItem = (topic) => {
        return (
            <div className='Sidebar__recentItem'>
                <span className='Sidebar__hash'>#</span>
                <p>{topic}</p>
            </div>)
    }
    return (
        <div className='Sidebar'>
            <div className='Sidebar__top'>
                <img src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                <Avatar className='Sidebar__avatar' />
                <h2>mutlib butt</h2>
                <h4>mutlibbutt209@gmail.com</h4>
            </div>
            <div className='Sidebar__stats'>
                <div className='Sidebar__stat'>
                    <p>who viewed</p>
                    <p className='Sidebar__statNumber'>2212</p>
                </div>
                <div className='Sidebar__stat'>
                    <p>Views on post </p>
                    <p className='Sidebar__statNumber'>2,448</p>
                </div>
            </div>
            <div className='Sidebar__bottom'>
                <p>Recent</p>
                {recentItem("ReactJS")}
                {recentItem("Programming")}
                {recentItem("Software Development")}
                {recentItem("Developer")}
            </div>
        </div>
    )
}
export default Sidebar