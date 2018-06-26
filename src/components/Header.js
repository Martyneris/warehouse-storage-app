import React from "react";

const Header = (props) => {

    const tabs = props.tabs.map((tab, i) => {
        return (
            <li
                className={props.active === i ? "active" : null}
                onClick={() => props.switchTab(i)}
                key={tab}>
                {tab}
            </li>
        )
    });

    return(
        <div className="header-wrapper">
        <h2>Storage</h2>
        <ul>
          {tabs}        
        </ul>
        </div>
    )}


export default Header;