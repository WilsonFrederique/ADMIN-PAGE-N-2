import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Jupe from '../../assets/images/Jupe.jpg';

import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { FaEye, FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';

import DashboardBox from '../../pages/Dashboard/Componets/DashboardBox';

import { Chart } from "react-google-charts";
import { MyContext } from '../../App';

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

const Products = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);
    const ITEM_HEIGHT = 48;

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [showBy, setShowBy] = useState('');
    const [showBySetCatBy, setCatBy] = useState('');

    const context = useContext(MyContext);

    useEffect(()=>{
        context.setIsHideSidebarAndHeader(false);
        window.scrollTo(0,0);
    },[]);

    const StyledBreadcrumb = styled(Chip)(({ theme }) => {
        const backgroundColor = 
            theme.palette.mode === 'light' 
            ? theme.palette.grey[100] 
            : theme.palette.grey[800];
        return{
            backgroundColor, 
            height: theme.spacing(3),
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightRegular,
            '&:hover, &:focus': {
                backgroundColor: emphasize(backgroundColor, 0.06),
            },
            '&:active':{
                boxShadow: theme.shadows[1],
                backgroundColor: emphasize(backgroundColor, 0.12)
            }
        }
    });


    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


     const [rotingsValue, setRotingsValue] = useState(3);


    return (
        <>
            <div className="right-content w-100">
                <div className="card shadow border-0 w-100 flex-row p-4">
                    <h5 className="mb-0">Product List</h5>
                    <Breadcrumbs aria-label='breadcrumb' className='ms-auto breadcrumb_'>
                        <StyledBreadcrumb 
                            className='StyledBreadcrumb' 
                            component="a"
                            href="#"
                            label="Dashboard"
                            icon={<HomeIcon fontSize='small' />}
                        />
                        <StyledBreadcrumb 
                            className='StyledBreadcrumb' 
                            label="Product List"
                            icon={<ExpandMoreIcon fontSize="small" />}
                        />
                    </Breadcrumbs>
                </div>

                {/* Box */}
                <div className="row dashboardBoxWrapperRow">
                    <div className="col-md-8 w-100">
                        <div className="dashboardBoxWrapper d-flex align-items-center">
                            <div className='dashboardBoxWrapper-produts'>
                                <DashboardBox color={["#1da256","#48d483"]} icon={<FaUserCircle />} grow={true} />
                                <DashboardBox color={["#c012e2","#eb64fe"]} icon={<IoMdCart />} />
                                <DashboardBox color={["#2c78e5","#60aff5"]} icon={<MdShoppingBag />} />
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
                                    value={showBy}
                                    onChange={(e)=>setShowBy(e.target.value)}
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
                                    value={showBySetCatBy}
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
                    <div className="table-responsive mt-3">
                        <table className='table table-bordered v-align'>
                            <thead className='thead-dark'>
                                <tr>
                                    <th>UID</th>
                                    <th style={{width:'100px'}}>PRODUCT</th>
                                    <th>CATEGORY</th>
                                    <th>BRAND</th>
                                    <th>PRICE</th>
                                    <th>STOCK</th>
                                    <th>ORDER</th>
                                    <th>SALES</th>
                                    <th>RATING</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Rows */}
                                <tr>
                                    <td><Checkbox {...label} /> #1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src={Jupe} alt="Jupe" className='w-100' />
                                                </div>
                                            </div>
                                            <div className="info ps-0">
                                                <h6>Tops and skirt set for Female</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Women's</td>
                                    <td>Richman</td>
                                    <td>
                                        <div style={{width:'70px'}}>
                                            <del className="text-decoration-line-through old">$21.00</del>
                                            <span className='new text-danger'>$21.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>380</td>
                                    <td>$30k</td>
                                    <td>
                                        <Rating name="read-only" value={rotingsValue} readOnly />
                                    </td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/products/details">
                                                <Button className='secondary' color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className='success' color="success"><FaPencilAlt /></Button>
                                            <Button className='error' color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td><Checkbox {...label} /> #2</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src={Jupe} alt="Jupe" className='w-100' />
                                                </div>
                                            </div>
                                            <div className="info ps-0">
                                                <h6>Tops and skirt set for Female</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Women's</td>
                                    <td>Richman</td>
                                    <td>
                                        <div style={{width:'70px'}}>
                                            <del className="text-decoration-line-through old">$21.00</del>
                                            <span className='new text-danger'>$21.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>380</td>
                                    <td>$30k</td>
                                    <td>
                                        <Rating name="read-only" value={rotingsValue} readOnly />
                                    </td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/products/details">
                                                <Button className='secondary' color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className='success' color="success"><FaPencilAlt /></Button>
                                            <Button className='error' color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td><Checkbox {...label} /> #3</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src={Jupe} alt="Jupe" className='w-100' />
                                                </div>
                                            </div>
                                            <div className="info ps-0">
                                                <h6>Tops and skirt set for Female</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Women's</td>
                                    <td>Richman</td>
                                    <td>
                                        <div style={{width:'70px'}}>
                                            <del className="text-decoration-line-through old">$21.00</del>
                                            <span className='new text-danger'>$21.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>380</td>
                                    <td>$30k</td>
                                    <td>
                                        <Rating name="read-only" value={rotingsValue} readOnly />
                                    </td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/products/details">
                                                <Button className='secondary' color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className='success' color="success"><FaPencilAlt /></Button>
                                            <Button className='error' color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td><Checkbox {...label} /> #4</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src={Jupe} alt="Jupe" className='w-100' />
                                                </div>
                                            </div>
                                            <div className="info ps-0">
                                                <h6>Tops and skirt set for Female</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Women's</td>
                                    <td>Richman</td>
                                    <td>
                                        <div style={{width:'70px'}}>
                                            <del className="text-decoration-line-through old">$21.00</del>
                                            <span className='new text-danger'>$21.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>380</td>
                                    <td>$30k</td>
                                    <td>
                                        <Rating name="read-only" value={rotingsValue} readOnly />
                                    </td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/products/details">
                                                <Button className='secondary' color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className='success' color="success"><FaPencilAlt /></Button>
                                            <Button className='error' color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td><Checkbox {...label} /> #5</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src={Jupe} alt="Jupe" className='w-100' />
                                                </div>
                                            </div>
                                            <div className="info ps-0">
                                                <h6>Tops and skirt set for Female</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Women's</td>
                                    <td>Richman</td>
                                    <td>
                                        <div style={{width:'70px'}}>
                                            <del className="text-decoration-line-through old">$21.00</del>
                                            <span className='new text-danger'>$21.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>380</td>
                                    <td>$30k</td>
                                    <td>
                                        <Rating name="read-only" value={rotingsValue} readOnly />
                                    </td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/products/details">
                                                <Button className='secondary' color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className='success' color="success"><FaPencilAlt /></Button>
                                            <Button className='error' color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td><Checkbox {...label} /> #6</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src={Jupe} alt="Jupe" className='w-100' />
                                                </div>
                                            </div>
                                            <div className="info ps-0">
                                                <h6>Tops and skirt set for Female</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Women's</td>
                                    <td>Richman</td>
                                    <td>
                                        <div style={{width:'70px'}}>
                                            <del className="text-decoration-line-through old">$21.00</del>
                                            <span className='new text-danger'>$21.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>380</td>
                                    <td>$30k</td>
                                    <td>
                                        <Rating name="read-only" value={rotingsValue} readOnly />
                                    </td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/products/details">
                                                <Button className='secondary' color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className='success' color="success"><FaPencilAlt /></Button>
                                            <Button className='error' color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td><Checkbox {...label} /> #7</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src={Jupe} alt="Jupe" className='w-100' />
                                                </div>
                                            </div>
                                            <div className="info ps-0">
                                                <h6>Tops and skirt set for Female</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Women's</td>
                                    <td>Richman</td>
                                    <td>
                                        <div style={{width:'70px'}}>
                                            <del className="text-decoration-line-through old">$21.00</del>
                                            <span className='new text-danger'>$21.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>380</td>
                                    <td>$30k</td>
                                    <td>
                                        <Rating name="read-only" value={rotingsValue} readOnly />
                                    </td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/products/details">
                                                <Button className='secondary' color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className='success' color="success"><FaPencilAlt /></Button>
                                            <Button className='error' color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td><Checkbox {...label} /> #8</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src={Jupe} alt="Jupe" className='w-100' />
                                                </div>
                                            </div>
                                            <div className="info ps-0">
                                                <h6>Tops and skirt set for Female</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Women's</td>
                                    <td>Richman</td>
                                    <td>
                                        <div style={{width:'70px'}}>
                                            <del className="text-decoration-line-through old">$21.00</del>
                                            <span className='new text-danger'>$21.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>380</td>
                                    <td>$30k</td>
                                    <td>
                                        <Rating name="read-only" value={rotingsValue} readOnly />
                                    </td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/products/details">
                                                <Button className='secondary' color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className='success' color="success"><FaPencilAlt /></Button>
                                            <Button className='error' color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td><Checkbox {...label} /> #9</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src={Jupe} alt="Jupe" className='w-100' />
                                                </div>
                                            </div>
                                            <div className="info ps-0">
                                                <h6>Tops and skirt set for Female</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Women's</td>
                                    <td>Richman</td>
                                    <td>
                                        <div style={{width:'70px'}}>
                                            <del className="text-decoration-line-through old">$21.00</del>
                                            <span className='new text-danger'>$21.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>380</td>
                                    <td>$30k</td>
                                    <td>
                                        <Rating name="read-only" value={rotingsValue} readOnly />
                                    </td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/products/details">
                                                <Button className='secondary' color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className='success' color="success"><FaPencilAlt /></Button>
                                            <Button className='error' color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td><Checkbox {...label} /> #10</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src={Jupe} alt="Jupe" className='w-100' />
                                                </div>
                                            </div>
                                            <div className="info ps-0">
                                                <h6>Tops and skirt set for Female</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Women's</td>
                                    <td>Richman</td>
                                    <td>
                                        <div style={{width:'70px'}}>
                                            <del className="text-decoration-line-through old">$21.00</del>
                                            <span className='new text-danger'>$21.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>380</td>
                                    <td>$30k</td>
                                    <td>
                                        <Rating name="read-only" value={rotingsValue} readOnly />
                                    </td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/products/details">
                                                <Button className='secondary' color="secondary"><FaEye /></Button>
                                            </Link>
                                            <Button className='success' color="success"><FaPencilAlt /></Button>
                                            <Button className='error' color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="d-flex tableFooter">
                            <p>Affichage de <b>1</b> sur <b>100</b> résultats</p>
                            <Pagination count={100} color="primary" className='pagination' showFirstButton showLastButton /> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;
