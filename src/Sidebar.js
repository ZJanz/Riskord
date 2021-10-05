import React from 'react'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Hello, I am the sidebar</h2>
            <div className="sidebar_top">
                <h3>Clever Programmer</h3>
                <ExpandMoreIcon />
            </div>
        </div>
    )
}

export default Sidebar
