import React from "react";
import _ from 'lodash';

const Items = (props) => {

    const items = props.items.map((item, i) => {
        return (
            <li
                className="items-li"
                key={i}>
                {item.name}
                <span>{item.price}€</span>
                <span className='delete-span'>X</span>
            </li>
        )
    });

    return (
        <div className="items">
            
                <ul className="items-list">
                    {items}
                </ul> 
            
        </div>
    )
}

export default Items;