import React from 'react'
import { useDispatch } from 'react-redux'
import { setChannelInfo } from './features/appSlice'
import './SidebarChannels.css'

function SidebarChannels({id, channelName}) {
    const dispatch = useDispatch();

    return (
        <div onClick = {() => dispatch(setChannelInfo( {channelId: id, channelName: channelName} ))} className = "sidebarChannels" >
            <h4>
                <span className = "sidebarChannel__hash">#</span>
                {channelName}
            </h4>
        </div>
    )
}

export default SidebarChannels
