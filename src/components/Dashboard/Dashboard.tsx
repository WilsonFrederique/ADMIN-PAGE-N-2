import React, { useState } from 'react'
import DashboardBox from '../../pages/Dashboard/Componets/DashboardBox'

import Jupe from '../../assets/images/Jupe.jpg'

import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosTimer } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';

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


  const [shiwBy, setshiwBy] = useState('');
  const [shiwBysetCatBy, setCatBy] = useState('');


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

            {/* Input */}
            <div className="row CardFilters mt-3">
              <div className="col-md-3">
                <h4>SHOW BY</h4>
                <FormControl size="small" className='w-100'>
                  <Select
                    value={shiwBy}
                    onChange={(e)=>setshiwBy(e.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    className='w-100'
                    >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>


              <div className="col-md-3">
                <h4>CATEGORY BY</h4>
                <FormControl size="small" className='w-100'>
                  <Select
                    value={shiwBysetCatBy}
                    onChange={(e)=>setCatBy(e.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    labelId="demo-select-small-label"
                    className='w-100'
                    >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            {/* Table */}
            <div className="teble-responsive mt-3">
              <table className='table table-bordered v-align'>
                <thead className='thead-dark'>
                  <tr>
                    <th>UID</th>
                    <th style={{width:'100px'}}>PRODUCT</th>
                    <th>CATEGORY</th>
                    <th>BRAND</th>
                    <th>PRICE</th>
                    <th>STOCK</th>
                    <th>RATING</th>
                    <th>ORDER</th>
                    <th>SALES</th>
                    <th>ACTION</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="d-flex align-items-center productBox">
                        <div className="imgWrapper">
                          <div className="img">
                            <img src={Jupe} alt="Jupe" className='w-100' />
                          </div>
                        </div>
                        <div className="info ps-0">
                          <h6>Tops and skirt set for Fealem</h6>
                          <p>
                            Women's exclisive summer Tops and skirt set for Female Tops and skirt set
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>womans</td>
                    <td>richman</td>
                    <td>
                      <div style={{width:'70px'}}>
                        <del className="text-decoration-line-through old">$21.00</del>
                        <span className='new text-danger'>$21.00</span>
                      </div>
                    </td>
                    <td>30</td>
                    <td>3.9(15)</td>
                    <td>380</td>
                    <td>$30k</td>
                    <td>
                      <div className="actions d-flex align-items-center">
                          <Button className='secondary' color="secondary"><FaEye /></Button>
                          <Button className='success' color="success"><FaPencilAlt /></Button>
                          <Button className='error' color="error"><MdDelete /></Button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="d-flex align-items-center productBox">
                        <div className="imgWrapper">
                          <div className="img">
                            <img src={Jupe} alt="Jupe" className='w-100' />
                          </div>
                        </div>
                        <div className="info ps-0">
                          <h6>Tops and skirt set for Fealem</h6>
                          <p>
                            Women's exclisive summer Tops and skirt set for Female Tops and skirt set
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>womans</td>
                    <td>richman</td>
                    <td>
                      <div style={{width:'70px'}}>
                        <del className="text-decoration-line-through old">$21.00</del>
                        <span className='new text-danger'>$21.00</span>
                      </div>
                    </td>
                    <td>30</td>
                    <td>3.9(15)</td>
                    <td>380</td>
                    <td>$30k</td>
                    <td>
                      <div className="actions d-flex align-items-center">
                          <Button className='secondary' color="secondary"><FaEye /></Button>
                          <Button className='success' color="success"><FaPencilAlt /></Button>
                          <Button className='error' color="error"><MdDelete /></Button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="d-flex align-items-center productBox">
                        <div className="imgWrapper">
                          <div className="img">
                            <img src={Jupe} alt="Jupe" className='w-100' />
                          </div>
                        </div>
                        <div className="info ps-0">
                          <h6>Tops and skirt set for Fealem</h6>
                          <p>
                            Women's exclisive summer Tops and skirt set for Female Tops and skirt set
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>womans</td>
                    <td>richman</td>
                    <td>
                      <div style={{width:'70px'}}>
                        <del className="text-decoration-line-through old">$21.00</del>
                        <span className='new text-danger'>$21.00</span>
                      </div>
                    </td>
                    <td>30</td>
                    <td>3.9(15)</td>
                    <td>380</td>
                    <td>$30k</td>
                    <td>
                      <div className="actions d-flex align-items-center">
                          <Button className='secondary' color="secondary"><FaEye /></Button>
                          <Button className='success' color="success"><FaPencilAlt /></Button>
                          <Button className='error' color="error"><MdDelete /></Button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="d-flex align-items-center productBox">
                        <div className="imgWrapper">
                          <div className="img">
                            <img src={Jupe} alt="Jupe" className='w-100' />
                          </div>
                        </div>
                        <div className="info ps-0">
                          <h6>Tops and skirt set for Fealem</h6>
                          <p>
                            Women's exclisive summer Tops and skirt set for Female Tops and skirt set
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>womans</td>
                    <td>richman</td>
                    <td>
                      <div style={{width:'70px'}}>
                        <del className="text-decoration-line-through old">$21.00</del>
                        <span className='new text-danger'>$21.00</span>
                      </div>
                    </td>
                    <td>30</td>
                    <td>3.9(15)</td>
                    <td>380</td>
                    <td>$30k</td>
                    <td>
                      <div className="actions d-flex align-items-center">
                          <Button className='secondary' color="secondary"><FaEye /></Button>
                          <Button className='success' color="success"><FaPencilAlt /></Button>
                          <Button className='error' color="error"><MdDelete /></Button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="d-flex align-items-center productBox">
                        <div className="imgWrapper">
                          <div className="img">
                            <img src={Jupe} alt="Jupe" className='w-100' />
                          </div>
                        </div>
                        <div className="info ps-0">
                          <h6>Tops and skirt set for Fealem</h6>
                          <p>
                            Women's exclisive summer Tops and skirt set for Female Tops and skirt set
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>womans</td>
                    <td>richman</td>
                    <td>
                      <div style={{width:'70px'}}>
                        <del className="text-decoration-line-through old">$21.00</del>
                        <span className='new text-danger'>$21.00</span>
                      </div>
                    </td>
                    <td>30</td>
                    <td>3.9(15)</td>
                    <td>380</td>
                    <td>$30k</td>
                    <td>
                      <div className="actions d-flex align-items-center">
                          <Button className='secondary' color="secondary"><FaEye /></Button>
                          <Button className='success' color="success"><FaPencilAlt /></Button>
                          <Button className='error' color="error"><MdDelete /></Button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="d-flex align-items-center productBox">
                        <div className="imgWrapper">
                          <div className="img">
                            <img src={Jupe} alt="Jupe" className='w-100' />
                          </div>
                        </div>
                        <div className="info ps-0">
                          <h6>Tops and skirt set for Fealem</h6>
                          <p>
                            Women's exclisive summer Tops and skirt set for Female Tops and skirt set
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>womans</td>
                    <td>richman</td>
                    <td>
                      <div style={{width:'70px'}}>
                        <del className="text-decoration-line-through old">$21.00</del>
                        <span className='new text-danger'>$21.00</span>
                      </div>
                    </td>
                    <td>30</td>
                    <td>3.9(15)</td>
                    <td>380</td>
                    <td>$30k</td>
                    <td>
                      <div className="actions d-flex align-items-center">
                          <Button className='secondary' color="secondary"><FaEye /></Button>
                          <Button className='success' color="success"><FaPencilAlt /></Button>
                          <Button className='error' color="error"><MdDelete /></Button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="d-flex align-items-center productBox">
                        <div className="imgWrapper">
                          <div className="img">
                            <img src={Jupe} alt="Jupe" className='w-100' />
                          </div>
                        </div>
                        <div className="info ps-0">
                          <h6>Tops and skirt set for Fealem</h6>
                          <p>
                            Women's exclisive summer Tops and skirt set for Female Tops and skirt set
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>womans</td>
                    <td>richman</td>
                    <td>
                      <div style={{width:'70px'}}>
                        <del className="text-decoration-line-through old">$21.00</del>
                        <span className='new text-danger'>$21.00</span>
                      </div>
                    </td>
                    <td>30</td>
                    <td>3.9(15)</td>
                    <td>380</td>
                    <td>$30k</td>
                    <td>
                      <div className="actions d-flex align-items-center">
                          <Button className='secondary' color="secondary"><FaEye /></Button>
                          <Button className='success' color="success"><FaPencilAlt /></Button>
                          <Button className='error' color="error"><MdDelete /></Button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="d-flex align-items-center productBox">
                        <div className="imgWrapper">
                          <div className="img">
                            <img src={Jupe} alt="Jupe" className='w-100' />
                          </div>
                        </div>
                        <div className="info ps-0">
                          <h6>Tops and skirt set for Fealem</h6>
                          <p>
                            Women's exclisive summer Tops and skirt set for Female Tops and skirt set
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>womans</td>
                    <td>richman</td>
                    <td>
                      <div style={{width:'70px'}}>
                        <del className="text-decoration-line-through old">$21.00</del>
                        <span className='new text-danger'>$21.00</span>
                      </div>
                    </td>
                    <td>30</td>
                    <td>3.9(15)</td>
                    <td>380</td>
                    <td>$30k</td>
                    <td>
                      <div className="actions d-flex align-items-center">
                          <Button className='secondary' color="secondary"><FaEye /></Button>
                          <Button className='success' color="success"><FaPencilAlt /></Button>
                          <Button className='error' color="error"><MdDelete /></Button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="d-flex align-items-center productBox">
                        <div className="imgWrapper">
                          <div className="img">
                            <img src={Jupe} alt="Jupe" className='w-100' />
                          </div>
                        </div>
                        <div className="info ps-0">
                          <h6>Tops and skirt set for Fealem</h6>
                          <p>
                            Women's exclisive summer Tops and skirt set for Female Tops and skirt set
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>womans</td>
                    <td>richman</td>
                    <td>
                      <div style={{width:'70px'}}>
                        <del className="text-decoration-line-through old">$21.00</del>
                        <span className='new text-danger'>$21.00</span>
                      </div>
                    </td>
                    <td>30</td>
                    <td>3.9(15)</td>
                    <td>380</td>
                    <td>$30k</td>
                    <td>
                      <div className="actions d-flex align-items-center">
                          <Button className='secondary' color="secondary"><FaEye /></Button>
                          <Button className='success' color="success"><FaPencilAlt /></Button>
                          <Button className='error' color="error"><MdDelete /></Button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="d-flex align-items-center productBox">
                        <div className="imgWrapper">
                          <div className="img">
                            <img src={Jupe} alt="Jupe" className='w-100' />
                          </div>
                        </div>
                        <div className="info ps-0">
                          <h6>Tops and skirt set for Fealem</h6>
                          <p>
                            Women's exclisive summer Tops and skirt set for Female Tops and skirt set
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>womans</td>
                    <td>richman</td>
                    <td>
                      <div style={{width:'70px'}}>
                        <del className="text-decoration-line-through old">$21.00</del>
                        <span className='new text-danger'>$21.00</span>
                      </div>
                    </td>
                    <td>30</td>
                    <td>3.9(15)</td>
                    <td>380</td>
                    <td>$30k</td>
                    <td>
                      <div className="actions d-flex align-items-center">
                          <Button className='secondary' color="secondary"><FaEye /></Button>
                          <Button className='success' color="success"><FaPencilAlt /></Button>
                          <Button className='error' color="error"><MdDelete /></Button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="d-flex align-items-center productBox">
                        <div className="imgWrapper">
                          <div className="img">
                            <img src={Jupe} alt="Jupe" className='w-100' />
                          </div>
                        </div>
                        <div className="info ps-0">
                          <h6>Tops and skirt set for Fealem</h6>
                          <p>
                            Women's exclisive summer Tops and skirt set for Female Tops and skirt set
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>womans</td>
                    <td>richman</td>
                    <td>
                      <div style={{width:'70px'}}>
                        <del className="text-decoration-line-through old">$21.00</del>
                        <span className='new text-danger'>$21.00</span>
                      </div>
                    </td>
                    <td>30</td>
                    <td>3.9(15)</td>
                    <td>380</td>
                    <td>$30k</td>
                    <td>
                      <div className="actions d-flex align-items-center">
                          <Button className='secondary' color="secondary"><FaEye /></Button>
                          <Button className='success' color="success"><FaPencilAlt /></Button>
                          <Button className='error' color="error"><MdDelete /></Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="d-flex tableFooter">
                <Pagination count={100} color="primary" className='pagination' showFirstButton showLastButton /> 
              </div>

            </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard