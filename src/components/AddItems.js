import React from "react";

class AddItems extends React.Component  {
 
    state = {
        category: '',
        name: '',
        price: ''
    }

    input = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleSelect(e) {
        this.setState({ category: e.target.value})
    }

     render () {

    const categories = this.props.categories.map((cat,i)=>{
        return (
            <option key={i}
             value={cat}
            >
            {cat}
            </option>
        )
    })

    return (
        <div>
            <h3 className="add">Add Item</h3>
            
            <input
                value={this.state.name}
                onChange={this.input}
                type="text" placeholder="title" name='name' />
            <input
                value={this.state.price}
                onChange={this.input}
                type="number" placeholder="price" name='price' />
            <select
            value={this.state.category}
            onChange={(e)=>this.handleSelect(e)}
            >
                {categories}
            </select>
            <button
                onClick={() => this.props.addItems(this.state.category, {name: this.state.name,
                price: this.state.price})}>
                add</button>
        </div>
        
    )
}
}

export default AddItems;