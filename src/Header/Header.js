import React from 'react'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat";
import HeaderOption from './HeaderOption';
function Header() {
  return (
    <div className={"header"}>
      <div className='header__left'>
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""/>

        <div className="header__search">
          {/*Search */}
          <SearchIcon />
          <input type="text"/>
        </div>
      </div>
      <div className='header__right'>
      <HeaderOption Icon={HomeIcon} title="Home"/>
      <HeaderOption Icon={SupervisorAccountIcon}title={"My Network"}/>

      <HeaderOption Icon={BusinessCenterIcon}title={"Jobs"}/>
      <HeaderOption Icon={ChatIcon}title={"Messaging"}/>

      <HeaderOption Icon={NotificationsIcon}title={"Notifications"}/>
      <HeaderOption avatar={"https://media.licdn.com/dms/image/C4D03AQHOQpJVX412gQ/profile-displayphoto-shrink_400_400/0/1579360331726?e=1689206400&v=beta&t=x6kiaUUFpNfFqvmERqOST02jCQ98kcTU88Yn7jntE5A"} title={"me"}/>
        

      </div>
    </div>
   
  )
}

export default Header