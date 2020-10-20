import { Avatar, IconButton } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import SidebarChannels from './SidebarChannels';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoIcon from '@material-ui/icons/Info';
import { Headset, InfoOutlined, Settings } from '@material-ui/icons';
import CallIcon from '@material-ui/icons/Call';
import SettingsIcon from '@material-ui/icons/Settings';
import HeadsetIcon from '@material-ui/icons/Headset';
import MicIcon from '@material-ui/icons/Mic';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import db, { auth } from './firebase';

function Sidebar() {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection('channels').onSnapshot((snapshot) =>
            setChannels(snapshot.docs.map((doc) => ({
                id: doc.id,
                channel: doc.data(),
            })))
        );

    }, [setChannels]);

    const handlAddCannel = () => {
        const channelName = prompt("Enter a new channel name");
        if (channelName) {
            db.collection('channels').add({
                channelName: channelName,
            });
        }
    }

    return (
        <div className = "sidebar" >
            <div className = "sidebar__top">
                <h3>Muhammad</h3>
                <ExpandMoreIcon />
            </div>

            <div className = "sidebar__channels">
                <div className = "sidebar__channelsHeader">
                    <div className = "sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text channel</h4>
                    </div>

                    <AddIcon onClick = {handlAddCannel} className = "sidebar__addChannel" />
                </div>

                <div className = "sidebar__channelsList" >
                    {channels.map(({id, channel}) => (
                        <SidebarChannels
                            key = {id}
                            id = {id}
                            channelName = {channel.channelName}
                        />
                    ))}
                </div>

            </div>

            <div className = "sidebar__voice">
                <SignalCellularAltIcon
                    className = "sidebar__voiceIcon"
                    fontSize = "large"
                />

                <div className = "sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className = "sidebar__voiceIcons">
                    <InfoOutlined />
                    <CallIcon />
                </div>
            </div>

            <div className = "sidebar__profile">
                <Avatar 
                    className = "sidebar__profileIcon"
                    src = {user.photo}
                />
                
                <div className = "sidebar__profileInfo" >
                    <h3>@{user.displayName}</h3>
                    <p>#{user.uid.substring(0, 5)}</p>
                </div>

                <div className = "sidebar__profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>

            <div onClick = {() => auth.signOut()} className = "sidebar__logout">
                <h3>Logout</h3>
                <ExitToAppIcon />
            </div>
        </div>
    )
}

export default Sidebar
