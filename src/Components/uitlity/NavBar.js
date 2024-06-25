import React from 'react'
import user from '../../imgs/undraw_profile.svg'
import { NavDropdown } from 'react-bootstrap'  
import DarkMode from './DarkModeToggle '
import { Link } from 'react-router-dom'

const NavBar = ({handleOpenMessage,handleOpenNoti ,showNoti,showMessage,handleOpen,handleClose,showside}) => {


  return (
    <div>
                    <div class="head">
                {
            showside === "mobile-nav"?
             <i class="fa-solid fa-xmark side-icon d-none" onClick={handleClose}></i> :
             <i class="fa-solid fa-bars-staggered side-icon d-none" onClick={handleOpen}></i>
        }
                <div class="search close">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input id="searchInput" className='search-dark' type="search" placeholder="Type of search..."/>
                </div>
                <DarkMode/>
                <div class="icons">
                    <div class="notifecation" onClick={handleOpenNoti}>
                        <i class="fas fa-bell fa-fw"></i>
                    </div>
                    <div class={`box-noti ${showNoti} box`}>
                        <h5>Notification</h5>
                        <hr/>
                        <div style={{overflow:"scroll",height:"320px"}}>
                        
                        <div class="noti">
                        <p class="text-sm ">
                    <span class="text-black dark:text-white">Edit your information in a swipe</span>
                    Sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim.
                  </p>
                  <p class="text-xs py-2">12 May, 2025</p>
                        </div>
                        <hr/>
                        <div class="noti">
                        <p class="text-sm ">
                    <span class="text-black dark:text-white">Edit your information in a swipe</span>
                    Sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim.
                  </p>
                  <p class="text-xs py-2">12 May, 2025</p>
                        </div>
                        <hr/>
                        <div class="noti">
                        <p class="text-sm ">
                    <span class="text-black dark:text-white">Edit your information in a swipe</span>
                    Sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim.
                  </p>
                  <p class="text-xs py-2">12 May, 2025</p>
                        </div>
                        <hr/>
                        <div class="noti">
                        <p class="text-sm ">
                    <span class="text-black dark:text-white">Edit your information in a swipe</span>
                    Sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim.
                  </p>
                  <p class="text-xs py-2">12 May, 2025</p>
                        </div>
                        </div>
                    </div>
                    <div class="message" onClick={handleOpenMessage}>
                        <i class="fas fa-envelope fa-fw"></i>
                    </div>
                    <div class={`box-noti ${showMessage} box`}>
                    <h5>Message</h5>
                    <hr/>
                    <div style={{overflow:"scroll",height:"320px"}}>
                        <div class="noti messg">
                            <div class="left "> 
                            <img src={user} alt=""/>
                            </div>
                            <div class="right">
                                <span class="bold">Mariya Desoja</span>
                                <p >I like your confidence 💪
                                    2min ago</p>
                            </div>
                        </div>
                            <hr/>
                        <div class="noti messg">
                            <div class="left "> 
                            <img src={user} alt=""/>
                            </div>
                            <div class="right">
                                <span class="bold">Mariya Desoja</span>
                                <p >I like your confidence 💪
                                    2min ago</p>
                            </div>
                        </div>
                            <hr/>
                        <div class="noti messg">
                            <div class="left "> 
                            <img src={user} alt=""/>
                            </div>
                            <div class="right">
                                <span class="bold">Mariya Desoja</span>
                                <p >I like your confidence 💪
                                    2min ago</p>
                            </div>
                        </div>
                            <hr/>
                        <div class="noti messg">
                            <div class="left "> 
                            <img src={user} alt=""/>
                            </div>
                            <div class="right">
                                <span class="bold">Mariya Desoja</span>
                                <p >I like your confidence 💪
                                    2min ago</p>
                            </div>
                        </div>
                            <hr/>
                        <div class="noti messg">
                            <div class="left "> 
                            <img src={user} alt=""/>
                            </div>
                            <div class="right">
                                <span class="bold">Mariya Desoja</span>
                                <p >I like your confidence 💪
                                    2min ago</p>
                            </div>
                        </div>
                            <hr/>
                        <div class="noti messg">
                            <div class="left "> 
                            <img src={user} alt=""/>
                            </div>
                            <div class="right">
                                <span class="bold">Mariya Desoja</span>
                                <p >I like your confidence 💪
                                    2min ago</p>
                            </div>
                        </div>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className='profil px-2'>
                    <div className="px-2 d-flex align-items-center flex-column">
                    <h6>Thomas Anree</h6>
                    <p>UX Designer</p>
                    </div>
                    <img src={user} alt=""/>
                </div>
                <NavDropdown title='' id="basic-nav-dropdown">
                    <Link to='/profile'>
                <NavDropdown.Item href="#action/3.1" >
                <i class="fa-solid fa-user pe-2"></i>
                My Profile
                </NavDropdown.Item>
                    </Link>
                <NavDropdown.Item href="#action/3.1" >
                <i class="fa-solid fa-address-book pe-2"></i>
                My Contacts
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" >
                <i class="fa-solid fa-gear pe-2"></i>
                Settings
                </NavDropdown.Item>
                <hr/>
                <NavDropdown.Item href="#action/3.2" >
                <i class="fa-solid fa-right-from-bracket pe-2"></i>
                Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </div>
    </div>
  )
}

export default NavBar