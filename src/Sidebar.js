import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from  "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
// import { useSelector } from "react-redux";
// import { selectUser } from "./features/userSlice";



function Sidebar() {
    return (
            <div className="sidebar">
                <div className="sidebar__top">
                    <h3>Epic discord clone</h3>
                    <ExpandMoreIcon />
                </div>
                <div className="sidebar__channels">
                    <div className="sidebar__channelsHeader">
                        <div className="sidebar__header">
                            <ExpandMoreIcon />
                            <h4>Text Channels</h4>
                        </div>
                        <AddIcon className="sidebar__addChannel" />
                    
                    </div>

                    <div className="sidebar__channelsList">
                        <SidebarChannel />
                    </div>
                </div>
                <div className="sidebar__voice">
                    <SignalCellularAltIcon className="sidebar__voiceIcon" fpntSize="large" />
                    <div className="sidebar__voiceInfo">
                        <h3>Voice Connected</h3>
                        <p>Stream</p>
                        <div className="sidebar__voiceIcons">
                            <InfoOutlinedIcon />
                            <CallIcon />
                        </div>
                    </div>
                </div>
                <div className="sidebar_profile">
                    <Avatar />
                    <div className = "sidebar__profileInfo">
                        <h3>Zachattack</h3>
                        <p>#ID</p>
                    </div>
                    <div className="sidebar__profileIcons">
                        <MicIcon />
                        <HeadsetIcon />
                        <SettingsIcon />
                    </div>
                </div>


            </div>
    )
}

export default Sidebar;
