import React from "react";

const Sidebar =(props)=> {


    const categories = props.categories.map((cat, i) => {
        return (
            <li
                onClick={() => props.switchCat(i)}
                className={props.active === i ? "category active" : "category"}
                key={cat}>
                {cat}
            </li>
        )
    });

    return(
        <div className="sidebar-wrapper">
        <h3>categories</h3>
        <ul>
            {categories}
        </ul>
        </div>
    )
}

export default Sidebar;