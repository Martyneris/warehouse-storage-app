import React from "react";

class Categories extends React.Component {

state = {
    name: ''
}


input = (e)=>{
    this.setState({[e.target.name]:e.target.value})
};

    render(){

    

    return (
        <div className="categories">
            <h3 className="add">Add a category</h3>
            <input
            value={this.state.name}
            onChange={this.input}
            type="text" placeholder="name" name="name"/>
            <button
            onClick={() => this.props.addCat(this.state.name)}
            >add</button>
            
        </div>
    )
}
}

export default Categories;