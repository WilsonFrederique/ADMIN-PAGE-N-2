import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import DashboardBox from '../../pages/Dashboard/Componets/DashboardBox'
import DashboardBoxCommande from '../../pages/Dashboard/Componets/DashboardBoxCommande'
import DashboardBoxClient from '../../pages/Dashboard/Componets/DashboardBoxClient'
import DashboardBoxUser from '../../pages/Dashboard/Componets/DashboardBoxUser'

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
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';


import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { chartsGridClasses } from '@mui/x-charts/ChartsGrid';
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from '../Dashboard/Chart';


import { MyContext } from '../../App';

// Chart 1
import { Chart } from "react-google-charts";
export const dataChart = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];


// Chart 2
export const dataGeo = [
    ["Country", "Popularity"],
    ["Madagascar", 100],
];
const chartOptions = {
    backgroundColor: 'transparent', // Fond transparent
    colorAxis: { colors: ['#FFFF00', '#FFD700'] }, // Couleurs des régions
    // Autres options peuvent être ajoutées ici si nécessaire
};


// Chart 3
const chartSetting = {
    yAxis: [{ label: 'rainfall (mm)' }],
    height: 300,
};

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

  const context = useContext(MyContext);

  useEffect(()=>{
    context.setIsHideSidebarAndHeader(false);
    window.scrollTo(0,0);
  },[]);


  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


  //   Etoils
  const [rotingsValue, setRotingsValue] = useState(3);


  //   =================== Doné Dans Mon Tableau et Fonctionnalité ==================

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Nombre d'éléments par page

  // Données du tableau (exemple)
  const data = [
    {
      id: 1,
      image: Jupe,
      name: "Tops and skirt set for Female",
      description: "Women's exclusive summer Tops and skirt set for Female Tops and skirt set",
      category: "Women's",
      brand: "Richman",
      oldPrice: "21.00",
      newPrice: "21.00",
      stock: 30,
      order: 380,
      sales: "30k",
      rating: rotingsValue, // Assurez-vous que `rotingsValue` est défini
    },
    {
      id: 2,
      image: Jupe,
      name: "Tops and skirt set for Female",
      description: "Women's exclusive summer Tops and skirt set for Female Tops and skirt set",
      category: "Women's",
      brand: "Richman",
      oldPrice: "21.00",
      newPrice: "21.00",
      stock: 30,
      order: 380,
      sales: "30k",
      rating: rotingsValue,
    },
    {
      id: 3,
      image: Jupe,
      name: "Tops and skirt set for Female",
      description: "Women's exclusive summer Tops and skirt set for Female Tops and skirt set",
      category: "Women's",
      brand: "Richman",
      oldPrice: "21.00",
      newPrice: "21.00",
      stock: 30,
      order: 380,
      sales: "30k",
      rating: rotingsValue,
    },
    {
      id: 4,
      image: Jupe,
      name: "Tops and skirt set for Female",
      description: "Women's exclusive summer Tops and skirt set for Female Tops and skirt set",
      category: "Women's",
      brand: "Richman",
      oldPrice: "21.00",
      newPrice: "21.00",
      stock: 30,
      order: 380,
      sales: "30k",
      rating: rotingsValue,
    },
    {
      id: 5,
      image: Jupe,
      name: "Tops and skirt set for Female",
      description: "Women's exclusive summer Tops and skirt set for Female Tops and skirt set",
      category: "Women's",
      brand: "Richman",
      oldPrice: "21.00",
      newPrice: "21.00",
      stock: 30,
      order: 380,
      sales: "30k",
      rating: rotingsValue,
    },
    {
      id: 6,
      image: Jupe,
      name: "Tops and skirt set for Female",
      description: "Women's exclusive summer Tops and skirt set for Female Tops and skirt set",
      category: "Women's",
      brand: "Richman",
      oldPrice: "21.00",
      newPrice: "21.00",
      stock: 30,
      order: 380,
      sales: "30k",
      rating: rotingsValue,
    },
    {
      id: 7,
      image: Jupe,
      name: "Tops and skirt set for Female",
      description: "Women's exclusive summer Tops and skirt set for Female Tops and skirt set",
      category: "Women's",
      brand: "Richman",
      oldPrice: "21.00",
      newPrice: "21.00",
      stock: 30,
      order: 380,
      sales: "30k",
      rating: rotingsValue,
    },
    {
      id: 8,
      image: Jupe,
      name: "Tops and skirt set for Female",
      description: "Women's exclusive summer Tops and skirt set for Female Tops and skirt set",
      category: "Women's",
      brand: "Richman",
      oldPrice: "21.00",
      newPrice: "21.00",
      stock: 30,
      order: 380,
      sales: "30k",
      rating: rotingsValue,
    },
    {
      id: 9,
      image: Jupe,
      name: "Tops and skirt set for Female",
      description: "Women's exclusive summer Tops and skirt set for Female Tops and skirt set",
      category: "Women's",
      brand: "Richman",
      oldPrice: "21.00",
      newPrice: "21.00",
      stock: 30,
      order: 380,
      sales: "30k",
      rating: rotingsValue,
    },
    // Répétez cette structure pour les 10 éléments
    {
      id: 10,
      image: Jupe,
      name: "Tops and skirt set for Female",
      description: "Women's exclusive summer Tops and skirt set for Female Tops and skirt set",
      category: "Women's",
      brand: "Richman",
      oldPrice: "21.00",
      newPrice: "21.00",
      stock: 30,
      order: 380,
      sales: "30k",
      rating: rotingsValue,
    },
  ];

  // Calcul des éléments à afficher
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Gestion du changement de page
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  // ============================================================================


  return (
    <>
      <div className="right-content w-100">
        {/* Box */}
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox color={["#1da256","#48d483"]} icon={<FaUserCircle />} grow={true} />
              <DashboardBoxCommande color={["#c012e2","#eb64fe"]} icon={<IoMdCart />} />
              <DashboardBoxClient color={["#2c78e5","#60aff5"]} icon={<MdShoppingBag />} />
              <DashboardBoxUser color={["#e1950e","#f3cd29"]} icon={<GiStarsStack />} />
            </div>
          </div>

          <div className="col-md-4 ps-0 topPart2">
            <div className="box graphBox">
                <div className="d-flex align-items-center w-100 bottomEle">
                    <h6 className="text-white mb-0 mt-0">Géolocalisation</h6>
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
                                <IoIosTimer /> Dernier Jour
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <IoIosTimer /> Dernière Semn
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <IoIosTimer /> Dernier Mois
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <IoIosTimer /> Dernière Année
                            </MenuItem>
                        </Menu>
                    </div>
                </div>

                <div className="text-white fw-bold">
                    {/* <Chart
                        chartType="PieChart"
                        width="100%"
                        height="100%"
                        data={dataChart}
                        options={options}
                    /> */}
                    <Chart
                        chartEvents={[
                            {
                            eventName: "select",
                            callback: ({ chartWrapper }) => {
                                const chart = chartWrapper.getChart();
                                const selection = chart.getSelection();
                                if (selection.length === 0) return;
                                const region = data[selection[0].row + 1];
                                console.log("Selected : " + region);
                            },
                            },
                        ]}
                        chartType="GeoChart"
                        width="100%"
                        height="100%"
                        data={dataGeo}
                        options={chartOptions}
                    />
                </div>
            </div>
          </div>
        </div>


        {/* Chart3 */}
        <div className="row">                        
            <div className="col-sm-12">
                <div className="card">
                    <div className="text-white fw-bold">
                    <BarChart
                        dataset={dataset}
                        xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                        series={[
                            {
                                dataKey: 'seoul',
                                label: 'Seoul rainfall',
                                valueFormatter
                            }
                        ]}
                        grid={{ horizontal: true }}
                        className="my-bar-chart" // Ajout de la classe CSS
                        {...chartSetting}
                    />
                    </div>
                </div>
            </div>
        </div>


        {/* Card Ou Tableaux*/}
        <div className="card shadow border-0 p-3 mt-4">
            <div className='d-flex add-product'>
                <h3 className="hd">Produits les plus vendus</h3>
                <Link to="">
                    <Button className='btn-blue btn-lg'>Ajouter</Button>
                </Link>
            </div>

            {/* Input */}
            <div className="row CardFilters mt-3">
              <div className="col-md-3">
                <h4 className='upercase'>Afficher par</h4>
                <FormControl size="small" className='w-100'>
                  <Select
                    value={shiwBy}
                    onChange={(e)=>setshiwBy(e.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    className='w-100'
                    >
                    <MenuItem value="">
                      <em>Aucun</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>


              <div className="col-md-3">
                <h4 className='upercase'>Catégorie par</h4>
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
                        <em>Aucun</em>
                    </MenuItem>
                    <MenuItem value={10}>Hommes</MenuItem>
                    <MenuItem value={20}>Femmes</MenuItem>
                    <MenuItem value={30}>Enfants</MenuItem>
                  </Select>
                </FormControl>
              </div>


              <div className="col-md-3">
                <h4 className='upercase'>Catégorie par</h4>
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
                        <em>Aucun</em>
                    </MenuItem>
                    <MenuItem value={10}>Hommes</MenuItem>
                    <MenuItem value={20}>Femmes</MenuItem>
                    <MenuItem value={30}>Enfants</MenuItem>
                  </Select>
                </FormControl>
              </div>


              <div className="col-md-3">
                <h4 className='upercase'>Catégorie par</h4>
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
                        <em>Aucun</em>
                    </MenuItem>
                    <MenuItem value={10}>Hommes</MenuItem>
                    <MenuItem value={20}>Femmes</MenuItem>
                    <MenuItem value={30}>Enfants</MenuItem>
                  </Select>
                </FormControl>
              </div>


            </div>



            {/* Table */}
            <div className="table-responsive mt-3">
                <table className="table table-bordered v-align">
                    <thead className="thead-dark">
                    <tr>
                        <th>UID</th>
                        <th style={{ width: '100px' }}>PRODUCT</th>
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
                        {currentItems.map((item) => (
                            <tr key={item.id}>
                                <td><Checkbox {...label} /> #{item.id}</td>
                                <td>
                                    <div className="d-flex align-items-center productBox">
                                    <div className="imgWrapper">
                                        <div className="img">
                                        <img src={item.image} className="w-100" />
                                        </div>
                                    </div>
                                    <div className="info ps-0">
                                        <h6>{item.name}</h6>
                                        <p>{item.description}</p>
                                    </div>
                                    </div>
                                </td>
                                <td>{item.category}</td>
                                <td>{item.brand}</td>
                                <td>
                                    <div style={{ width: '70px' }}>
                                    <del className="text-decoration-line-through old">${item.oldPrice}</del>
                                    <span className="new text-danger">${item.newPrice}</span>
                                    </div>
                                </td>
                                <td>{item.stock}</td>
                                <td>{item.order}</td>
                                <td>${item.sales}</td>
                                <td>
                                    <Rating name="read-only" value={item.rating} readOnly />
                                </td>
                                <td>
                                    <div className="actions d-flex align-items-center">
                                    <Link to="/products/details">
                                        <Button className="secondary" color="secondary"><FaEye /></Button>
                                    </Link>
                                    <Button className="success" color="success"><FaPencilAlt /></Button>
                                    <Button className="error" color="error"><MdDelete /></Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="d-flex tableFooter">
                    <p>Affichage de <b>{indexOfFirstItem + 1}</b> à <b>{Math.min(indexOfLastItem, data.length)}</b> sur <b>{data.length}</b> résultats</p>
                    <Pagination
                    count={Math.ceil(data.length / itemsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    className="pagination"
                    showFirstButton
                    showLastButton
                    />
                </div>
            </div>



            {/* Table sans fonctionnalité */}
            {/* <div className="teble-responsive mt-3">
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

            </div> */}

        </div>

      </div>
    </>
  )
}

export default Dashboard