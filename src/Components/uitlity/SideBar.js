import React, { useState } from 'react'
import {
    Sidebar,
    Menu,
    MenuItem, 
    SubMenu,
  } from "react-pro-sidebar";

import logo from '../../imgs/store.png';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const SideBar = ({showside} ) => { 

  return (
    <div className={`side-bar ${showside}`}>
        <Sidebar style={{ height: "100vh" }} backgroundColor="white">
        <div className='side-logo '>
            <img src={logo} alt='logo'/>
            <p className='logo-title h5'>El_Fateh</p>
        </div>
        <hr style={{marginTop:"70px"}}/>
        <Menu >
            <MenuItem style={{fontSize:"15px",color:"white"}}>MENU </MenuItem>
          <SubMenu icon={<i class="fa-solid fa-bank" style={{color:"white"}} ></i>} style={{color:"white"}} label="Dashboard">
          <Link to='/'>
            <MenuItem style={{fontSize:"15px",color:"white"}}>eCommerce </MenuItem>
          </Link>
            <Link to='/analytics'>
            <MenuItem style={{fontSize:"15px",color:"white"}}>AnalyticsPro
            <span class="absolute right-4 block rounded bg-primary px-2 py-1 text-xs text-white"
            style={{fontSize:"x-small", fontWeight:"bold"}}>Pro</span>
            </MenuItem>
            </Link>
            <Link to='/marketing'>
            <MenuItem style={{fontSize:"15px",color:"white"}}>MarketingPro
            <span class="absolute right-4 block rounded bg-primary px-2 py-1 text-xs text-white"
            style={{fontSize:"x-small", fontWeight:"bold"}}>Pro</span>
            </MenuItem>
            </Link>
            <Link to='/crm'>
            <MenuItem style={{fontSize:"15px",color:"white"}}>CRMPro
            <span class="absolute right-4 block rounded bg-primary px-2 py-1 text-xs text-white"
            style={{fontSize:"x-small", fontWeight:"bold"}}>Pro</span>
            </MenuItem>
            </Link>
            <Link to='/stocks'>
            <MenuItem style={{fontSize:"15px",color:"white"}}>Stocks
            <span class="absolute right-4 block rounded bg-primary px-2 py-1 text-xs text-white"
            style={{fontSize:"x-small", fontWeight:"bold"}}>Pro</span>
            </MenuItem>
            </Link>
        </SubMenu>
            <Link to='/orders'>
            <li className='side-link'>
            <i class="fa-solid fa-clipboard" style={{fontSize:"20px"}}></i> 
            <h5 style={{color:"white"}}>Orders</h5>
            </li>
            </Link>
            <Link to='/message'>
            <li className='side-link'>
            <i class="fa-solid fa-bell" style={{fontSize:"20px"}}></i> 
            <h5 style={{color:"white"}}>Message</h5>
            </li>
            </Link>
            <Link to='/products'>
            <li className='side-link'>
            <i class="fa-solid fa-tag" style={{fontSize:"20px"}}></i> 
            <h5 style={{color:"white"}}>Products</h5>
            </li>
            </Link>
            <Link to='/offer'>
            <li className='side-link'>
            <i class="fa-solid fa-truck" style={{fontSize:"20px"}}></i>
            <h5 style={{color:"white"}}>Offers</h5>
            </li>
            </Link>
            <Link to='/delivery'>
            <li className='side-link'>
            <i class="fa-solid fa-truck" style={{fontSize:"20px"}}></i>
            <h5 style={{color:"white"}}>Delivery boys</h5>
            </li>
            </Link>
            <Link to='/map'>
            <li className='side-link'>
            <i class="fa-solid fa-earth-asia" style={{fontSize:"20px"}}></i> 
            <h5 style={{color:"white"}}>Maps</h5>
            </li>
            </Link>
            <Link to=''>
            <li className='side-link'>
            <i class="fa-solid fa-flag" style={{fontSize:"20px"}}></i> 
            <h5 style={{color:"white"}}>Reports</h5>
            </li>
            </Link>
            <Link to='/setting'>
            <li className='side-link'>
            <i class="fa-solid fa-gear" style={{fontSize:"20px"}}></i> 
            <h5 style={{color:"white"}}>Settings</h5>
            </li>
            </Link>
        </Menu>
        <div className='py-3 elfateh-pro'>
            <h5>El-Fayeh Pro</h5>
            <p>Get All Dashboards and 300+ UI Elements</p>
            <Button variant="primary" className='w-100'>Purchase Now</Button>
        </div>
      </Sidebar>
    </div>
  )
}

export default SideBar