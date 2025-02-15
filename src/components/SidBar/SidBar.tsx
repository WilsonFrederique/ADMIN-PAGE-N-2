import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

import { FaAngleRight } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { MyContext } from '../../App';



const SidBar = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

    const context = useContext(MyContext);

    const isOpenSubmenu = (index: number) =>{
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu);
    } 

    return (
        <>
            <div className="sidebar">
                <ul className="list-unstyled">
                    <li>
                        <Link to="">
                            <Button className={`w-100 ${activeTab===0 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(0)}>
                                <span className='icon'><MdDashboard /></span>
                                Dashbord 
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab===1 && isToggleSubmenu===true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(1)}>
                            <span className='icon'><FaProductHunt /></span>
                            Products 
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab===1 && isToggleSubmenu===true ? 'colapse' : 'colapsed'}`}>
                            <ul className="submenu">
                                <li><Link to="#">Product List</Link></li>
                                <li><Link to="#">Product View</Link></li>
                                <li><Link to="#">Product Upload</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to="">
                            <Button className={`w-100 ${activeTab===2 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(2)}>
                                <span className='icon'><FaCartArrowDown /></span>
                                Orders 
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <Button className={`w-100 ${activeTab===3 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(3)}>
                                <span className='icon'><MdMessage /></span>
                                Messages 
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <Button className={`w-100 ${activeTab===4 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(4)}>
                                <span className='icon'><FaBell /></span>
                                Notifictions 
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <Button className={`w-100 ${activeTab===5 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(5)}>
                                <span className='icon'><IoMdSettings /></span>
                                    Settings 
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <Button className={`w-100 ${activeTab===6 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(6)}>
                                <span className='icon'><MdDashboard /></span>
                                Dashbord 
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <Button className={`w-100 ${activeTab===7 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(7)}>
                                <span className='icon'><FaProductHunt /></span>
                                Products 
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <Button className={`w-100 ${activeTab===8 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(8)}>
                                <span className='icon'><FaCartArrowDown /></span>
                                Orders 
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <Button className={`w-100 ${activeTab===9 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(9)}>
                                <span className='icon'><MdMessage /></span>
                                Messages 
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <Button className={`w-100 ${activeTab===10 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(10)}>
                                <span className='icon'><FaBell /></span>
                                Notifictions 
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <Button className={`w-100 ${activeTab===11 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(11)}>
                                <span className='icon'><IoMdSettings /></span>
                                    Settings 
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                </ul>

                <br />

                <div className="logoutWrapper">
                    <div className="logoutBox">
                        <Button variant="contained"><IoMdLogOut /> Logout</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SidBar