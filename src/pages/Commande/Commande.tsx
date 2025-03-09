import { useEffect, useRef, useState } from 'react';

import './Commande.css';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

import { MdDelete } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaGetPocket } from "react-icons/fa";

import Jupe from '../../assets/images/Jupe2.jfif';
import Jupe1 from '../../assets/images/Jupe3.jfif';

import Button from '@mui/material/Button';

const Commande = () => {
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

//   Retour en hautr
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="right-content w-100">
      <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Commandes</h5>
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
              label="View"
              icon={<ExpandMoreIcon fontSize="small" />}
              />
          </Breadcrumbs>
      </div>

        <div className="card productDetailsSection">
            <div className="row">
            <div className='pt-3 pb-3 ps-4'>
                <div className='container pt-20'>

                    <div className='d-flex mt-2 mb-0 group-title-et-btnAdd'>
                        Produit(s) commandé(s) ...
                        <div>
                            <Button className='btn-lg btn-blue'>Ajouter</Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
                        
                        <div className="border-2 p-4 rounded-md shadow-lg cursor-pointer">
                            <div className='d-flex group-cmd2 mb-4'>

                                <div>
                                    <h5 className='mb-4 title'>Description Produit</h5>
                                    <div className='group-description-produit-commande'>
                                        <div className='place-img-produit-cmd-de-client2'>
                                            <img width={20} src={Jupe} className="" />
                                        </div>
                                        <div>
                                            <h6>Categorie</h6>
                                            <h6>Produit Name</h6>
                                            <h6>Color</h6>
                                            <h6>Tail</h6>
                                            <h6>Quantité</h6>
                                            <h6>Prix unitaire</h6>
                                        </div>
                                        <div>
                                            <h6>: &nbsp; Woman's</h6>
                                            <h6>: &nbsp; Jupe</h6>
                                            <h6>: &nbsp; Red</h6>
                                            <h6>: &nbsp; S</h6>
                                            <h6>: &nbsp; 03</h6>
                                            <h6>: &nbsp; $21.00</h6>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <h5 className='mb-4 title'>Description Client</h5>
                                    <div className='group-description-produit-commande'>
                                        <div>
                                            <h6>Nom</h6>
                                            <h6>Prenom</h6>
                                            <h6>CIN</h6>
                                            <h6>Adresse</h6>
                                            <h6>Téléphone</h6>
                                            <h6>Payment</h6>
                                        </div>
                                        <div>
                                            <h6>: &nbsp; Walle</h6>
                                            <h6>: &nbsp; Fred</h6>
                                            <h6>: &nbsp; 0000 0000 0000</h6>
                                            <h6>: &nbsp; Ampitakely</h6>
                                            <h6>: &nbsp; 000 00 000 00</h6>
                                            <h6>: &nbsp; Oui</h6>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-xl text-primary">jupe</h3>
                                    <p className="text-sm text-gray-600 mt-1">Lorem ipsum dolor aut.</p>
                                    <div className="mt-3 flex justify-between group-btn-prix-produit">
                                        <h5 className="d-flex text-xl font-semibold mb-2">
                                            <div>
                                                <span className='new'>$21.00</span> &nbsp;
                                                <del className="text-decoration-line-through old text-danger">$25.00</del>
                                            </div>
                                        </h5>
                                        <div className='title size'>
                                            <h6>Quantité &nbsp; <span> &nbsp;: 03</span></h6>
                                            <h6>Prix Total &nbsp; <span className='color-total-prix'> $63.00</span></h6>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className='group-cmd-btn2 mt-3 flex justify-between gap-1.5'>
                                <div className='d-flex'>
                                    <MdDelete className='icon-produit' />                                 
                                </div>
                                <div className='btn-right-cmd'>
                                    <FaGetPocket className='icon-produit-right rotate' />
                                    <FaGetPocket className='icon-produit-right' />
                                </div>
                            </div>
                        </div>
                        
                        <div className="border-2 p-4 rounded-md shadow-lg cursor-pointer">
                            <div className='d-flex group-cmd2 mb-4'>

                                <div>
                                    <h5 className='mb-4 title'>Description Produit</h5>
                                    <div className='group-description-produit-commande'>
                                        <div className='place-img-produit-cmd-de-client2'>
                                            <img width={20} src={Jupe1} className="" />
                                        </div>
                                        <div>
                                            <h6>Categorie</h6>
                                            <h6>Produit Name</h6>
                                            <h6>Color</h6>
                                            <h6>Tail</h6>
                                            <h6>Quantité</h6>
                                            <h6>Prix unitaire</h6>
                                        </div>
                                        <div>
                                            <h6>: &nbsp; Woman's</h6>
                                            <h6>: &nbsp; Jupe</h6>
                                            <h6>: &nbsp; Red</h6>
                                            <h6>: &nbsp; S</h6>
                                            <h6>: &nbsp; 03</h6>
                                            <h6>: &nbsp; $21.00</h6>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <h5 className='mb-4 title'>Description Client</h5>
                                    <div className='group-description-produit-commande'>
                                        <div>
                                            <h6>Nom</h6>
                                            <h6>Prenom</h6>
                                            <h6>CIN</h6>
                                            <h6>Adresse</h6>
                                            <h6>Téléphone</h6>
                                            <h6>Payment</h6>
                                        </div>
                                        <div>
                                            <h6>: &nbsp; Walle</h6>
                                            <h6>: &nbsp; Fred</h6>
                                            <h6>: &nbsp; 0000 0000 0000</h6>
                                            <h6>: &nbsp; Ampitakely</h6>
                                            <h6>: &nbsp; 000 00 000 00</h6>
                                            <h6>: &nbsp; Oui</h6>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-xl text-primary">jupe</h3>
                                    <p className="text-sm text-gray-600 mt-1">Lorem ipsum dolor aut.</p>
                                    <div className="mt-3 flex justify-between group-btn-prix-produit">
                                        <h5 className="d-flex text-xl font-semibold mb-2">
                                            <div>
                                                <span className='new'>$21.00</span> &nbsp;
                                                <del className="text-decoration-line-through old text-danger">$25.00</del>
                                            </div>
                                        </h5>
                                        <div className='title size'>
                                            <h6>Quantité &nbsp; <span> &nbsp;: 03</span></h6>
                                            <h6>Prix Total &nbsp; <span className='color-total-prix'> $63.00</span></h6>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className='group-cmd-btn2 mt-3 flex justify-between gap-1.5'>
                                <div className='d-flex'>
                                    <MdDelete className='icon-produit' />                                 
                                </div>
                                <div className='btn-right-cmd'>
                                    <FaGetPocket className='icon-produit-right rotate' />
                                    <FaGetPocket className='icon-produit-right' />
                                </div>
                            </div>
                        </div>
                        
                        <div className="border-2 p-4 rounded-md shadow-lg cursor-pointer">
                            <div className='d-flex group-cmd2 mb-4'>

                                <div>
                                    <h5 className='mb-4 title'>Description Produit</h5>
                                    <div className='group-description-produit-commande'>
                                        <div className='place-img-produit-cmd-de-client2'>
                                            <img width={20} src={Jupe} className="" />
                                        </div>
                                        <div>
                                            <h6>Categorie</h6>
                                            <h6>Produit Name</h6>
                                            <h6>Color</h6>
                                            <h6>Tail</h6>
                                            <h6>Quantité</h6>
                                            <h6>Prix unitaire</h6>
                                        </div>
                                        <div>
                                            <h6>: &nbsp; Woman's</h6>
                                            <h6>: &nbsp; Jupe</h6>
                                            <h6>: &nbsp; Red</h6>
                                            <h6>: &nbsp; S</h6>
                                            <h6>: &nbsp; 03</h6>
                                            <h6>: &nbsp; $21.00</h6>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <h5 className='mb-4 title'>Description Client</h5>
                                    <div className='group-description-produit-commande'>
                                        <div>
                                            <h6>Nom</h6>
                                            <h6>Prenom</h6>
                                            <h6>CIN</h6>
                                            <h6>Adresse</h6>
                                            <h6>Téléphone</h6>
                                            <h6>Payment</h6>
                                        </div>
                                        <div>
                                            <h6>: &nbsp; Walle</h6>
                                            <h6>: &nbsp; Fred</h6>
                                            <h6>: &nbsp; 0000 0000 0000</h6>
                                            <h6>: &nbsp; Ampitakely</h6>
                                            <h6>: &nbsp; 000 00 000 00</h6>
                                            <h6>: &nbsp; Oui</h6>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-xl text-primary">jupe</h3>
                                    <p className="text-sm text-gray-600 mt-1">Lorem ipsum dolor aut.</p>
                                    <div className="mt-3 flex justify-between group-btn-prix-produit">
                                        <h5 className="d-flex text-xl font-semibold mb-2">
                                            <div>
                                                <span className='new'>$21.00</span> &nbsp;
                                                <del className="text-decoration-line-through old text-danger">$25.00</del>
                                            </div>
                                        </h5>
                                        <div className='title size'>
                                            <h6>Quantité &nbsp; <span> &nbsp;: 03</span></h6>
                                            <h6>Prix Total &nbsp; <span className='color-total-prix'> $63.00</span></h6>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className='group-cmd-btn2 mt-3 flex justify-between gap-1.5'>
                                <div className='d-flex'>
                                    <MdDelete className='icon-produit' />                                 
                                </div>
                                <div className='btn-right-cmd'>
                                    <FaGetPocket className='icon-produit-right rotate' />
                                    <FaGetPocket className='icon-produit-right' />
                                </div>
                            </div>
                        </div>
                        
                        <div className="border-2 p-4 rounded-md shadow-lg cursor-pointer">
                            <div className='d-flex group-cmd2 mb-4'>

                                <div>
                                    <h5 className='mb-4 title'>Description Produit</h5>
                                    <div className='group-description-produit-commande'>
                                        <div className='place-img-produit-cmd-de-client2'>
                                            <img width={20} src={Jupe1} className="" />
                                        </div>
                                        <div>
                                            <h6>Categorie</h6>
                                            <h6>Produit Name</h6>
                                            <h6>Color</h6>
                                            <h6>Tail</h6>
                                            <h6>Quantité</h6>
                                            <h6>Prix unitaire</h6>
                                        </div>
                                        <div>
                                            <h6>: &nbsp; Woman's</h6>
                                            <h6>: &nbsp; Jupe</h6>
                                            <h6>: &nbsp; Red</h6>
                                            <h6>: &nbsp; S</h6>
                                            <h6>: &nbsp; 03</h6>
                                            <h6>: &nbsp; $21.00</h6>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <h5 className='mb-4 title'>Description Client</h5>
                                    <div className='group-description-produit-commande'>
                                        <div>
                                            <h6>Nom</h6>
                                            <h6>Prenom</h6>
                                            <h6>CIN</h6>
                                            <h6>Adresse</h6>
                                            <h6>Téléphone</h6>
                                            <h6>Payment</h6>
                                        </div>
                                        <div>
                                            <h6>: &nbsp; Walle</h6>
                                            <h6>: &nbsp; Fred</h6>
                                            <h6>: &nbsp; 0000 0000 0000</h6>
                                            <h6>: &nbsp; Ampitakely</h6>
                                            <h6>: &nbsp; 000 00 000 00</h6>
                                            <h6>: &nbsp; Oui</h6>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-xl text-primary">jupe</h3>
                                    <p className="text-sm text-gray-600 mt-1">Lorem ipsum dolor aut.</p>
                                    <div className="mt-3 flex justify-between group-btn-prix-produit">
                                        <h5 className="d-flex text-xl font-semibold mb-2">
                                            <div>
                                                <span className='new'>$21.00</span> &nbsp;
                                                <del className="text-decoration-line-through old text-danger">$25.00</del>
                                            </div>
                                        </h5>
                                        <div className='title size'>
                                            <h6>Quantité &nbsp; <span> &nbsp;: 03</span></h6>
                                            <h6>Prix Total &nbsp; <span className='color-total-prix'> $63.00</span></h6>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className='group-cmd-btn2 mt-3 flex justify-between gap-1.5'>
                                <div className='d-flex'>
                                    <MdDelete className='icon-produit' />                                 
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
                        <button
                        className={`back-to-top w-100 btn-blue btn-lg back-Top ${showButton ? "show" : ""}`}
                        onClick={scrollToTop}
                        >
                        <IoMdArrowRoundBack /> &nbsp; Retour en haut
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default Commande;
