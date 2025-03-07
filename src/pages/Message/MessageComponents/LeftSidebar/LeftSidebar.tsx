import './LeftSidebar.css';

import Logo from '../../../../assets/images/smsIcon.png'
import Profil from '../../../../assets/images/Profil.png'

import { CiMenuKebab } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";

const LeftSidebar = () => {
  return (
    <div className='ls'>
      <div className="ls-top">
        <div className="ls-nav">
          <img src={Logo} alt="logo" className='logo' />
          <div className="menu">
            <CiMenuKebab />
            <div className="sub-menu">
              <p>Edit Profile</p>
              <hr />
              <p>Logout</p>
            </div>
          </div>
        </div>

        <div className="ls-search">
          <IoIosSearch />
          <input type="text" placeholder='Search here...' />
        </div>        
      </div>

      <div className="ls-list">
        {Array(12).fill("").map((item, index)=>(
          <div key={index} className="friends">
            <img src={Profil} alt="profil1" className='profil1' />
            <div>
              <p className='p-message'>Wall Fred</p>
              <span>Hello, How are you ?</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LeftSidebar