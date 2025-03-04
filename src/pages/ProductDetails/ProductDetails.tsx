import React, { useRef } from 'react'
import DashboardBox from '../../pages/Dashboard/Componets/DashboardBox';


import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import Slider from "react-slick";


import { MdBrandingWatermark } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoIosColorPalette } from "react-icons/io";
import { RiFontSizeAi } from "react-icons/ri";
import { IoMdPricetags } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { PiStarThin } from "react-icons/pi";
import { MdPublishedWithChanges } from "react-icons/md";
import { FaReply } from "react-icons/fa";


import Jupe from '../../assets/images/Jupe.jpg';
import Jupe2 from '../../assets/images/Jupe2.jfif';
import Jupe3 from '../../assets/images/Jupe3.jfif';
import Jupe4 from '../../assets/images/Jupe4.jfif';
import Jupe5 from '../../assets/images/Jupe5.jfif';
import Jupe6 from '../../assets/images/Jupe6.jfif';
import Jupe7 from '../../assets/images/Jupe7.jfif';

import Profil2 from '../../assets/images/Profil2.png'
import UserAvatarImg from '../../components/userAvatarImg/UserAvatarImg';



export const ProductDetails = () => {
    
    const StyledBreadcrumb = styled(Chip)(({ theme }) => {
        const backgroundColor = 
            theme.palette.mode === 'light' 
            ? theme.palette.grey[100] 
            : theme.palette.grey[800];
        return {
            backgroundColor, 
            height: theme.spacing(3),
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightRegular,
            '&:hover, &:focus': {
                backgroundColor: emphasize(backgroundColor, 0.06),
            },
            '&:active': {
                boxShadow: theme.shadows[1],
                backgroundColor: emphasize(backgroundColor, 0.12),
            },
        };
    });


    const productSliderOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };


    const productSliderSmlOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false
    };


    const productSliderBig = useRef(null);
    const productSliderSml = useRef(null);

    const goToSlide = (index) => {
        if (productSliderBig.current && productSliderSml.current) {
            productSliderBig.current.slickGoTo(index);
            productSliderSml.current.slickGoTo(index);
        }
    };


    return (
        <>
            <div className="right-content w-100">
                <div className="card shadow border-0 w-100 flex-row p-4">
                    <h5 className="mb-0">Product View</h5>
                    <Breadcrumbs aria-label="breadcrumb" className="ms-auto breadcrumb_">
                        <StyledBreadcrumb 
                            className='StyledBreadcrumb' 
                            component="a"
                            href="#"
                            label="Dashboard"
                            icon={<HomeIcon fontSize="small" />}
                        />
                        <StyledBreadcrumb 
                            className='StyledBreadcrumb' 
                            component="a"
                            href="#"
                            label="Product"
                        />
                        <StyledBreadcrumb 
                            className='StyledBreadcrumb' 
                            label="Product View"
                            icon={<ExpandMoreIcon fontSize="small" />}
                        />
                    </Breadcrumbs>
                </div>


                {/* Card */}
                <div className="card productDetailsSection">

                    <div className="row">
                        <div className="col-md-5">
                            <div className="sliderWrapper pt-3 pb-3 ps-4 pe-4">
                                <h6 className='mb-4'>Product Gallery</h6>
                                <Slider {...productSliderOptions} ref={productSliderBig} className='sliderBig mb-2'>
                                    <div className="item">
                                        <img src={Jupe} alt="Jupe" className='w-100' />
                                    </div>
                                    <div className="item">
                                        <img src={Jupe6} alt="Jupe" className='w-100' />
                                    </div>
                                    <div className="item">
                                        <img src={Jupe4} alt="Jupe" className='w-100' />
                                    </div>
                                    <div className="item">
                                        <img src={Jupe5} alt="Jupe" className='w-100' />
                                    </div>
                                    <div className="item">
                                        <img src={Jupe2} alt="Jupe" className='w-100' />
                                    </div>
                                    <div className="item">
                                        <img src={Jupe7} alt="Jupe" className='w-100' />
                                    </div>
                                </Slider>
                                <Slider {...productSliderSmlOptions} ref={productSliderSml} className='sliderSml'>
                                    <div className="item" onClick={()=>goToSlide(0)}>
                                        <img src={Jupe} alt="Jupe" className='w-100 h-img-Slider' />
                                    </div>
                                    <div className="item" onClick={()=>goToSlide(1)}>
                                        <img src={Jupe6} alt="Jupe" className='w-100 h-img-Slider' />
                                    </div>
                                    <div className="item" onClick={()=>goToSlide(2)}>
                                        <img src={Jupe4} alt="Jupe" className='w-100 h-img-Slider' />
                                    </div>
                                    <div className="item" onClick={()=>goToSlide(3)}>
                                        <img src={Jupe5} alt="Jupe" className='w-100 h-img-Slider' />
                                    </div>
                                    <div className="item" onClick={()=>goToSlide(4)}>
                                        <img src={Jupe2} alt="Jupe" className='w-100 h-img-Slider' />
                                    </div>
                                    <div className="item" onClick={()=>goToSlide(5)}>
                                        <img src={Jupe7} alt="Jupe" className='w-100 h-img-Slider' />
                                    </div>
                                </Slider>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <div className='pt-3 pb-3 ps-4 pe-4'>
                                <h6 className='mb-4'>Product Details</h6>

                                <h4>Formal suis for men wedding slim fit 3 piece dress business party jacket</h4>

                                <div className="productInfo mt-3">
                                    <div className="row mb-2">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><MdBrandingWatermark /></span>
                                            <span className="name">Brand</span>
                                        </div>

                                        <div className="col-sm-7">
                                            : <span>Ecstasy</span>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><BiSolidCategoryAlt /></span>
                                            <span className="name">Category</span>
                                        </div>

                                        <div className="col-sm-7">
                                            : <span>Woman's</span>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><BiSolidCategoryAlt /></span>
                                            <span className="name">Tags</span>
                                        </div>

                                        <div className="col-sm-7">
                                            : <span>
                                                <ul className="list list-inline tags sml">
                                                    <li className="list-inline-item">
                                                        <span>SUITE</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>PARTY</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>DRESS</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>SMART</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>MAN</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>STYLES</span>
                                                    </li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><IoIosColorPalette /></span>
                                            <span className="name">Color</span>
                                        </div>

                                        <div className="col-sm-7">
                                            : <span>
                                                <ul className="list list-inline tags sml">
                                                    <li className="list-inline-item">
                                                        <span>RED</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>BLUE</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>WHITE</span>
                                                    </li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><RiFontSizeAi /></span>
                                            <span className="name">Size</span>
                                        </div>

                                        <div className="col-sm-7">
                                            : <span>
                                                <ul className="list list-inline tags sml">
                                                    <li className="list-inline-item">
                                                        <span>SM</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>SD</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>LG</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>XL</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>XXL</span>
                                                    </li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><IoMdPricetags /></span>
                                            <span className="name">Price</span>
                                        </div>

                                        <div className="col-sm-7">
                                            : <span>
                                                <span className='new'>$21.00</span>
                                                <del className="text-decoration-line-through old text-danger">$25.00</del>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><FaShoppingCart /></span>
                                            <span className="name">Stock</span>
                                        </div>

                                        <div className="col-sm-7">
                                            : <span>(68) Piece</span>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><PiStarThin /></span>
                                            <span className="name">Review</span>
                                        </div>

                                        <div className="col-sm-7">
                                            : <span>(03) Review</span>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><MdPublishedWithChanges /></span>
                                            <span className="name">Published</span>
                                        </div>

                                        <div className="col-sm-7">
                                            : <span>02 Mar 2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="p-4">

                        <h6 className='mt-4 mb-3'>Product Description</h6>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, 
                            repudiandae amet laborum deserunt voluptatum ab harum necessitatibus? 
                            repudiandae amet laborum deserunt voluptatum ab harum necessitatibus? 
                            repudiandae amet laborum deserunt voluptatum ab harum necessitatibus? 
                            Hic, laborum exercitationem omnis Hic, laborum exercitationem omnis iure, 
                            ipsam odit mollitia quo, repudiandae amet laborum deserunt voluptatum 
                            ab harum necessitatibus?iure, ipsam odit mollitia quo, repudiandae 
                            amet laborum deserunt voluptatum ab harum necessitatibus? Hic, laborum 
                            exercitationem omnisHic, laborum exercitationem omnis iure, ipsam odit 
                            mollitia quo, repudiandae amet laborum deserunt voluptatum ab harum 
                            necessitatibus? iure, ipsam odit mollitia quo, repudiandae amet laborum 
                            deserunt voluptatum ab harum necessitatibus? Hic, laborum exercitationem 
                            omnis iure, ipsam odit mollitia quo, distinctio fuga accusamus delectus?
                        </p>


                        <br />


                        <h6 className='mt-4 mb-4'>Reting Analytics</h6>
                        <div className="retingSection">
                            <div className="retingrow d-flex align-items-center mb-2">
                                <span className="col1">5 Star</span>

                                <div className="col2">
                                    <div className="progress" role="progressbar">
                                        <div className="progress-bar" style={{ width: '70%' }}></div>
                                    </div>
                                </div>

                                <span className="col3">(22)</span>
                            </div>

                            <div className="retingrow d-flex align-items-center mb-2">
                                <span className="col1">4 Star</span>

                                <div className="col2">
                                    <div className="progress" role="progressbar">
                                        <div className="progress-bar" style={{ width: '60%' }}></div>
                                    </div>
                                </div>

                                <span className="col3">(06)</span>
                            </div>

                            <div className="retingrow d-flex align-items-center mb-2">
                                <span className="col1">3 Star</span>

                                <div className="col2">
                                    <div className="progress" role="progressbar">
                                        <div className="progress-bar" style={{ width: '40%' }}></div>
                                    </div>
                                </div>

                                <span className="col3">(05)</span>
                            </div>

                            <div className="retingrow d-flex align-items-center mb-2">
                                <span className="col1">2 Star</span>

                                <div className="col2">
                                    <div className="progress" role="progressbar">
                                        <div className="progress-bar" style={{ width: '20%' }}></div>
                                    </div>
                                </div>

                                <span className="col3">(03)</span>
                            </div>

                            <div className="retingrow d-flex align-items-center mb-2">
                                <span className="col1">1 Star</span>

                                <div className="col2">
                                    <div className="progress" role="progressbar">
                                        <div className="progress-bar" style={{ width: '10%' }}></div>
                                    </div>
                                </div>

                                <span className="col3">(01)</span>
                            </div>
                        </div>


                        <br />


                        <h6 className='mt-4 mb-4'>Customer reviews</h6>
                        <div className="reviewsSection">
                            <div className="reviewsRow">
                                <div className="row">
                                    <div className='d-flex reviewsRow-avatar-and-btn'>
                                        <div className="col-sm-7 d-flex">
                                            <div className="d-flex flex-column">
                                                <div className="userInfo d-flex align-items-center mb-3">
                                                    <UserAvatarImg img={Profil2} lg={true} />

                                                    <div className="info ps-3">
                                                        <h5>Somal Zaid</h5>
                                                        <span>25 minute agi!</span>
                                                    </div>
                                                </div>

                                                <Rating name="read-only" value={4.5}   precision={0.5}readOnly />
                                            </div>
                                        </div>

                                        <div className="col-md-5 d-flex align-items-center">
                                            <div className="ms-auto">
                                                <Button className='btn btn-primary btn-lg btn-big ms-auto'><FaReply /> &nbsp; Reply</Button>
                                            </div>
                                        </div>
                                    </div>

                                    <p className='mt-2'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Nulla facilis error quaerat magnam dolores quam voluptatum 
                                        perferendis qui accusamus ullam. Nulla facilis error quaerat 
                                        magnam dolores quam voluptatum perferendis qui accusamus ullam.
                                    </p>
                                </div>
                            </div>


                            <div className="reviewsRow reply">
                                <div className="row">
                                    <div className='d-flex reviewsRow-avatar-and-btn'>
                                        <div className="col-sm-7 d-flex">
                                            <div className="d-flex flex-column">
                                                <div className="userInfo d-flex align-items-center mb-3">
                                                    <UserAvatarImg img={Profil2} lg={true} />

                                                    <div className="info ps-3">
                                                        <h5>Somal Zaid</h5>
                                                        <span>25 minute agi!</span>
                                                    </div>
                                                </div>

                                                <Rating name="read-only" value={4.5}   precision={0.5}readOnly />
                                            </div>
                                        </div>

                                        <div className="col-md-5 d-flex align-items-center">
                                            <div className="ms-auto">
                                                <Button className='btn btn-primary btn-lg btn-big ms-auto'><FaReply /> &nbsp; Reply</Button>
                                            </div>
                                        </div>
                                    </div>

                                    <p className='mt-2'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Nulla facilis error quaerat magnam dolores quam voluptatum 
                                        magnam dolores quam voluptatum perferendis qui accusamus ullam.
                                    </p>
                                </div>
                            </div>


                            <div className="reviewsRow reply">
                                <div className="row">
                                    <div className='d-flex reviewsRow-avatar-and-btn'>
                                        <div className="col-sm-7 d-flex">
                                            <div className="d-flex flex-column">
                                                <div className="userInfo d-flex align-items-center mb-3">
                                                    <UserAvatarImg img={Profil2} lg={true} />

                                                    <div className="info ps-3">
                                                        <h5>Somal Zaid</h5>
                                                        <span>25 minute agi!</span>
                                                    </div>
                                                </div>

                                                <Rating name="read-only" value={4.5}   precision={0.5}readOnly />
                                            </div>
                                        </div>

                                        <div className="col-md-5 d-flex align-items-center">
                                            <div className="ms-auto">
                                                <Button className='btn btn-primary btn-lg btn-big ms-auto'><FaReply /> &nbsp; Reply</Button>
                                            </div>
                                        </div>
                                    </div>

                                    <p className='mt-2'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Nulla facilis error quaerat magnam dolores quam voluptatum 
                                        magnam dolores quam voluptatum perferendis qui accusamus ullam.
                                    </p>
                                </div>
                            </div>


                            <div className="reviewsRow">
                                <div className="row">
                                    <div className='d-flex reviewsRow-avatar-and-btn'>
                                        <div className="col-sm-7 d-flex">
                                            <div className="d-flex flex-column">
                                                <div className="userInfo d-flex align-items-center mb-3">
                                                    <UserAvatarImg img={Profil2} lg={true} />

                                                    <div className="info ps-3">
                                                        <h5>Somal Zaid</h5>
                                                        <span>25 minute agi!</span>
                                                    </div>
                                                </div>

                                                <Rating name="read-only" value={4.5}   precision={0.5}readOnly />
                                            </div>
                                        </div>

                                        <div className="col-md-5 d-flex align-items-center">
                                            <div className="ms-auto">
                                                <Button className='btn btn-primary btn-lg btn-big ms-auto'><FaReply /> &nbsp; Reply</Button>
                                            </div>
                                        </div>
                                    </div>

                                    <p className='mt-2'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Nulla facilis error quaerat magnam dolores quam voluptatum 
                                        perferendis qui accusamus ullam. Nulla facilis error quaerat 
                                        magnam dolores quam voluptatum perferendis qui accusamus ullam.
                                    </p>
                                </div>
                            </div>
                        </div>
                        

                        <br />


                        <h6 className='mt-4 mb-4'>Review Reply Form</h6>
                        <form className="reviewForm">
                            <textarea className='mb-3' placeholder='Write here'></textarea>

                            <Button className='btn btn-primary btn-lg btn-big w-100'>Drop your replies</Button>
                        </form>
                        
                    </div>

                </div>
            </div>
        </>
    );
}
