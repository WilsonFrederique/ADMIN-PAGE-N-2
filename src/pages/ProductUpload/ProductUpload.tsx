import React, { useState } from 'react'

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Jupe from '../../assets/images/Jupe.jpg'


import Breadcrumbs from '@mui/material/Breadcrumbs';
import { emphasize, styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';


import { FaCloudUploadAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa";



const ProductUpload = () => {
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

    const [categoryVal, setcategoryVal] = React.useState('');
    const [brandVal, setbrandVal] = React.useState('');

    const handleChangeCategory = (event: SelectChangeEvent) => {
        setcategoryVal(event.target.value);
    };
    const handleChangeBrand = (event: SelectChangeEvent) => {
        setbrandVal(event.target.value);
    };


    const [rotingsValue, setRotingsValue] = useState(1);

    return (
        <>
            <div className="right-content w-100">
                <div className="card shadow border-0 w-100 flex-row p-4">
                    <h5 className="mb-0">Product Upload</h5>
                    <Breadcrumbs aria-label='breadcrumb' className='ms-auto breadcrumb_'>
                        <StyledBreadcrumb 
                            className='StyledBreadcrumb' 
                            component="a"
                            href="#"
                            label="Dash..."
                            icon={<HomeIcon fontSize='small' />}
                        />
                        <StyledBreadcrumb 
                            className='StyledBreadcrumb' 
                            component="a"
                            href="#"
                            label="Product"
                        />
                        <StyledBreadcrumb 
                            className='StyledBreadcrumb' 
                            label="Upload"
                            icon={<ExpandMoreIcon fontSize="small" />}
                        />
                    </Breadcrumbs>
                </div>



                <form className='form'>
                    {/* Input */}
                    <div className="row">
                        {/* <div className="col-sm-8"> */}
                        <div className="col-sm-12">
                            <div className="card p-4">
                                <h5 className='mb-4'>Basic Information</h5>


                                <div className="form-group">
                                    <h6>TITLE</h6>
                                    <input type="text" />
                                </div>


                                <div className="form-group">
                                    <h6>DESCRIPTION</h6>
                                    <textarea rows={5} cols={10}></textarea>
                                </div>


                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>CATEGORY</h6>
                                            <Select
                                                value={categoryVal}
                                                onChange={handleChangeCategory  }
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className='w-100'
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Men</MenuItem>
                                                <MenuItem value={20}>Women</MenuItem>
                                                <MenuItem value={30}>Kids</MenuItem>
                                            </Select>
                                        </div>
                                    </div>


                                    <div className="col">
                                        <div className="form-group">
                                            <h6>BRAND</h6>
                                            <Select
                                                value={brandVal}
                                                onChange={handleChangeBrand  }
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className='select-brand w-100'
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Supreme</MenuItem>
                                                <MenuItem value={20}>Off-White</MenuItem>
                                                <MenuItem value={30}>Balenciaga</MenuItem>
                                                <MenuItem value={40}>Vetements</MenuItem>
                                                <MenuItem value={50}>Fear of God</MenuItem>
                                            </Select>
                                        </div>
                                    </div>


                                    <div className="col">
                                        <div className="form-group">
                                            <h6>PRICE</h6>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>OLD PRICE</h6>
                                            <input type="text" />
                                        </div>
                                    </div>


                                    <div className="col">
                                        <div className="form-group">
                                            <h6>REGULAR PRICE</h6>
                                            <input type="text" />
                                        </div>
                                    </div>


                                    <div className="col">
                                        <div className="form-group">
                                            <h6>DISCOUNT PRICE</h6>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>PRODUCT STOCK</h6>
                                            <input type="text" />
                                        </div>
                                    </div>


                                    <div className="col">
                                        <div className="form-group">
                                            <h6>PRODUCT RAMS</h6>
                                            <input type="text" />
                                        </div>
                                    </div>


                                    <div className="col">
                                        <div className="form-group">
                                            <h6>DISCOUNT PRICE</h6>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>RATINGS</h6>
                                            <Rating
                                                name="simple-controlled"
                                                value={rotingsValue}
                                                onChange={(event, newValue) => {
                                                setRotingsValue(newValue);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>


                                <br />


                                {/* <Button className='btn btn-primary btn-lg btn-big'><FaCloudUploadAlt /> &nbsp; PUBLISH AND VIEW</Button> */}
                            </div>
                        </div>

                        
                        {/* <div className="col-sm-4">
                            <div className="card p-4">
                                <h5 className='mb-4'>RIGHT</h5>
                            </div>
                        </div> */}
                    </div>


                    {/* Image */}
                    <div className="row">
                        <div className="col-sm-15">
                            <div className="card p-4 mt-0">
                                <div className="imagesUploadSec">
                                    <h5 className='mb-4'>Media and published</h5>
                                    <div className="imgUploadBox d-flex align-items-center">
                                        <div className="uploadBox">
                                            <span className="remove">
                                                <IoClose className='svg' />
                                            </span>
                                            <div className="box">
                                                <LazyLoadImage 
                                                    alt={"image"}
                                                    effect="blur"
                                                    className="w-100"
                                                    src={Jupe}
                                                />
                                            </div>
                                        </div>


                                        <div className="uploadBox">
                                            <input type="file" multiple name='image' />
                                            <div className="info">
                                                <FaRegImage />
                                            </div>
                                        </div>
                                    </div>

                                    <br />

                                    {/* <Button type='submit' className='btn-blue btn-lg btn-big w-100'><FaCloudUploadAlt /> &nbsp; PUBLISH AND VIEW</Button> */}
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Button */}
                    <div className="row">
                        <div className="col-sm-15">
                            <div className="card p-4 mt-0">
                                <div className="imagesUploadSec">
                                    <Button type='submit' className='btn-blue btn-lg btn-big w-100'><FaCloudUploadAlt /> &nbsp; PUBLISH AND VIEW</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </>
    )
}

export default ProductUpload