import React from "react";

const Statistics = (props) => {


console.log(props.allItems)




    const total = props.items.reduce((total, a) => total + a.price, 0);

    return (
        <div>
            <h4>number of total items in the warehouse:{props.allItems.length}</h4>
            <h4>Total items of this category: {props.items.length}</h4> 
            <h5>Total sum of items:{total}</h5>          
        </div>
    )
}

export default Statistics;