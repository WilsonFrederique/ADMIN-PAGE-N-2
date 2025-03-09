import './ClientLists.css';

import Profil from '../../../../assets/images/Profil.png';

import { CiMenuKebab } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { MdMode } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import Button from '@mui/material/Button';

const ClientLists = () => {

  return (
    <div className='ls'>
        <div className="ls-top">
            <div className="ls-nav">
            <FaUsersBetweenLines className='icon-client' />
            <div className="menu">
                <CiMenuKebab />
                <div className="sub-menu">
                <p>Add New</p>
                <hr />
                <p>View Clients</p>
                </div>
            </div>
            </div>

            <div className="ls-search">
            <IoIosSearch />
            <input type="text" placeholder='Search here...' />
            </div>        
        </div>

        <div className="ls-list">
            {Array(12).fill("").map((_, index) => (
            <div key={index} className="friends2" >
                <div className='lign-clien'>
                    <div className='profil-clients'>
                        <img src={Profil} alt="profil1" className='profil1' />
                        <div className="text-profil-clients">
                            <p className='p-message'>Wall Fred</p>
                            <span>Hello, How are you ?</span>
                        </div>
                    </div>
                    <div className="btn-action-clients">
                        <IoEyeSharp className='icon-action-clien1' />
                        <MdMode className='icon-action-clien2' />
                        <MdDelete className='icon-action-clien3' />
                    </div>
                </div>
                
            </div>
            ))}
        </div>
    </div>
  );
}

export default ClientLists;
