import { useRef } from 'react';

import { Link } from 'react-router-dom';

import './ClientDetail.css';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Slider from 'react-slick';

import { ImManWoman } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaGetPocket } from "react-icons/fa";

import Profile from '../../../../assets/images/Profil2.png';
import Jupe from '../../../../assets/images/Jupe2.jfif';
import Jupe1 from '../../../../assets/images/Jupe3.jfif';

const ClientDetail = () => {
  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800];

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
    slidesToShow: 0,
    slidesToScroll: 0,
    arrows: false,
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
    <div className="right-content w-100">
      <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Clients</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ms-auto breadcrumb_">
              <StyledBreadcrumb
              className="StyledBreadcrumb"
              component="a"
              href="#"
              label="Dash..."
              icon={<HomeIcon fontSize="small" />}
              />
              <StyledBreadcrumb
              className="StyledBreadcrumb"
              label="Clients"
              icon={<ExpandMoreIcon fontSize="small" />}
              />
              <StyledBreadcrumb
              className="StyledBreadcrumb"
              label="View"
              icon={<ExpandMoreIcon fontSize="small" />}
              />
          </Breadcrumbs>
      </div>

      <div className="card productDetailsSection">
        <div className="row">
          <div className="col-md-5">
            <div className="sliderWrapper pt-3 pb-3 ps-4 pe-4">
              <h6 className="mb-4">Client Gallery</h6>
              <Slider {...productSliderOptions} ref={productSliderBig} className="sliderBig mb-2">
                {[Profile].map((image, index) => (
                  <div className="item" key={index}>
                    <img src={image} alt="Profile" className="w-100" />
                  </div>
                ))}
              </Slider>
              <div className='place-btn-back-suppr-clien-view'>
                <div></div>
                <div className="mt-2 btn-back-suppr-clien-view">
                  <button className="btn btn-primary btn-lg me-2">
                    <MdDelete /> &nbsp; Supprimer
                  </button>
                  <Link to="/clients">
                    <button className="btn btn-outline-secondary">
                      <IoMdArrowRoundBack /> &nbsp; Back
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-7">
            <div className="pt-3 pb-3 ps-4 pe-4">
              <h6 className="mb-4">Client Details</h6>
              <h4>À propos de ce client</h4>

              <div className="productInfo mt-3">
                {[
                  { icon: <FaUser />, label: 'Nom', value: 'Wilson' },
                  { icon: <FaUser />, label: 'Prenom', value: "Frederique" },
                  { icon: <ImManWoman />, label: 'Sex', value: "Homme" },
                  { icon: <MdOutlineLocationOn />, label: 'Adresse', value: "Ampitakely" },
                  { icon: <MdCall />, label: 'Téléphone', value: "000 00 000 00" },
                  { icon: <CgMail />, label: 'Email', value: "wilson@gmail.com" },
                  { icon: <FaRegCreditCard />, label: 'Email', value: "0000 0000 0000 0000" },
                ].map((item, index) => (
                  <div className="row mb-2" key={index}>
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">{item.icon}</span>
                      <span className="name">{item.label}</span>
                    </div>
                    <div className="col-sm-7">
                      :{' '}
                      {Array.isArray(item.value) ? (
                        <ul className="list list-inline tags sml">
                          {item.value.map((val, idx) => (
                            <li className="list-inline-item" key={idx}>
                              <span>{val}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card productDetailsSection">
        <div className="row">
          <div className='pt-3 pb-3 ps-4'>
            <div className='container pt-20'>
              Produit(s) commandé(s) ...
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                
                <div className="border-2 p-4 rounded-md shadow-lg cursor-pointer">
                  <div className='d-flex group-cmd'>
                    <div>
                      <h1 className="font-semibold text-xl text-primary mt-2">jupe</h1>
                      <p className="text-sm text-gray-600 mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, aut.</p>
                      <div className="mt-3 flex justify-between group-btn-prix-produit">
                        <h3 className="d-flex text-xl font-semibold">
                          <div>
                              <span className='new'>$21.00</span> &nbsp;
                              <del className="text-decoration-line-through old text-danger">$25.00</del>
                          </div>
                        </h3>
                      </div>
                    </div>
                    <div className='place-img-produit-cmd-de-client'>
                      <img src={Jupe} className="w-full h-40 object-cover rounded-md" />
                      <div className='plave-quantite'>
                        <p className='p-quantite'>Quantité</p> <span className='span-cantite-chiffre'>03</span>
                      </div>
                    </div>
                  </div>
                  <div className='group-cmd-btn mt-3 flex justify-between gap-1.5'>
                      <div className='d-flex'>
                        <MdDelete className='icon-produit' /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div>
                          Payment &nbsp;&nbsp;<span className='spna-oui-non'>Oui</span>
                        </div>
                      </div>
                      <div className='btn-right-cmd'>
                        <FaGetPocket className='icon-produit-right rotate' />
                        <FaGetPocket className='icon-produit-right' />
                      </div>
                  </div>
                </div>
                
                <div className="border-2 p-4 rounded-md shadow-lg cursor-pointer">
                  <div className='d-flex group-cmd'>
                    <div>
                      <h1 className="font-semibold text-xl text-primary mt-2">jupe</h1>
                      <p className="text-sm text-gray-600 mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, aut.</p>
                      <div className="mt-3 flex justify-between group-btn-prix-produit">
                        <h3 className="d-flex text-xl font-semibold">
                          <div>
                              <span className='new'>$30.00</span> &nbsp;
                              <del className="text-decoration-line-through old text-danger">$35.00</del>
                          </div>
                        </h3>
                      </div>
                    </div>
                    <div className='place-img-produit-cmd-de-client'>
                      <img src={Jupe1} className="w-full h-40 object-cover rounded-md" />
                      <div className='plave-quantite'>
                        <p className='p-quantite'>Quantité</p> <span className='span-cantite-chiffre'>02</span>
                      </div>
                    </div>
                  </div>
                  <div className='group-cmd-btn mt-3 flex justify-between gap-1.5'>
                      <div className='d-flex'>
                        <MdDelete className='icon-produit' /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div>
                          Payment &nbsp;&nbsp;<span className='spna-oui-non'>Oui</span>
                        </div>
                      </div>
                      <div className='btn-right-cmd'>
                        <FaGetPocket className='icon-produit-right rotate' />
                        <FaGetPocket className='icon-produit-right' />
                      </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card productDetailsSection">
        <div className="row">
          <div className='pt-3 pb-3 ps-4'>
            <div className='container pt-20'>
              <Link to="/clients">
                <button className="w-100 btn btn-outline-secondary">
                  <IoMdArrowRoundBack /> &nbsp; Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetail;
