import React, { useState } from 'react'
import DashboardBox from '../../pages/Dashboard/Componets/DashboardBox'

import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosTimer } from "react-icons/io";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import { Chart } from "react-google-charts";


export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const options = {
  'backgroundColor': 'transparent',
  'chartArea': {'width': '100%', 'height': '100%'},
};


const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 48;
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  };

  return (
    <>
      <div className="right-content w-100">
        {/* Box */}
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox color={["#1da256","#48d483"]} icon={<FaUserCircle />} grow={true} />
              <DashboardBox color={["#c012e2","#eb64fe"]} icon={<IoMdCart />} />
              <DashboardBox color={["#2c78e5","#60aff5"]} icon={<MdShoppingBag />} />
              <DashboardBox color={["#e1950e","#f3cd29"]} icon={<GiStarsStack />} />
            </div>
          </div>

          <div className="col-md-4 ps-0">
            <div className="box graphBox">
                <div className="d-flex align-items-center w-100 bottomEle">
                    <h6 className="text-white mb-0 mt-0">Total Sales</h6>
                    <div className="ms-auto">
                        <Button className="ms-auto toggleIcon" onClick={handleClick}><HiDotsVertical /></Button>
                        <Menu
                            className='boxdown_menu'
                            MenuListProps={{
                            'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            slotProps={{
                            paper: {
                                style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                                },
                            },
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <IoIosTimer /> Last Day
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <IoIosTimer /> Last Week
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <IoIosTimer /> Last Month
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <IoIosTimer /> Last Yers
                            </MenuItem>
                        </Menu>
                    </div>
                </div>

                <div className="text-white fw-bold">
                  <h3>$3,135,500.00</h3>
                  <p>$1,100,800.00 in last month</p>

                  <Chart
                    chartType="PieChart"
                    width="100%"
                    height="100%"
                    data={data}
                    options={options}
                  />
                </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="card shadow border-0 p-3 mt-4">
            <h3 className="hd">Best Selling Products</h3>

            <div className="row">
              <div className="col">
                <h4>SHOW BY</h4>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard