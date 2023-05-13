import React from 'react'
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
function Sidebar() {


    const recentItem = (topic) => (
        <div className={"sidebar__recentItem"}>
            <span className={"sidebar__hash"}>#</span>
            <p>{topic}</p>
        </div>

    );
  return (
    <div className={"sidebar"}>
        <div className={"sidebar__top"}>
            <img src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlnaHRpbmd8ZW58MHx8MHx8&w=1000&q=80" alt=""/>
            <Avatar className={"sidebar__avatar"} src={"https://media.licdn.com/dms/image/C4D03AQHOQpJVX412gQ/profile-displayphoto-shrink_400_400/0/1579360331726?e=1689206400&v=beta&t=x6kiaUUFpNfFqvmERqOST02jCQ98kcTU88Yn7jntE5A"}/>
            <h2>jac rees</h2>
            <h4>jacroystonrees1@gmail.com</h4>
        </div>

        <div className={"sidebar__stats"}>
            <div className={"sidebar__stat"}>
                <p>Who viewed you</p>
                <p className={"sidebar__statNumber"}>2,543</p>
                </div>
                <div className={"sidebar__stat"}>
                <p>Views on post</p>
                <p className={"sidebar__statNumber"}>1,743</p>
            </div>
        </div>

        <div className={"sidebar__bottom"}>
            <p>Recent</p>
            {recentItem('reactJs')}
            {recentItem('Techniquest')}
            {recentItem('Software Engineering')}
            {recentItem('Software Design')}
        </div>


    </div>
  )
}

export default Sidebar;