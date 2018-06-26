import React, { Component } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Items from './components/Items';
import AddItems from './components/AddItems';
import Categories from './components/Categories';
import Statistics from './components/Statistics';
import './style.css';


class App extends Component {
state={
  tabs: ['items','addItems','categories','statistics'],
  activeTab: 0,
  categories: ['keyboards', 'laptops', 'monitors','hard-drives','all'],
  activeCat: 0,
  items: { 
    "keyboards": [{ "name": "asus keyboard", "price": 15.5 }, { "name": "logitech keyboard", "price": 41.5 }, { "name": "apple keyboard", "price": 21.8 }, { "name": "dell keyboard", "price": 12.2 }], 
    "laptops": [{ "name": "asus laptop", "price": 1248.8 }, { "name": "dell laptop", "price": 1200.8 }, { "name": "apple laptop", "price": 1999.9 }, { "name": "toshiba laptop", "price": 933.8 }, { "name": "samsung laptop", "price": 854.9 }],
    "monitors": [{ "name": "asus monitor", "price": 544.9 }, { "name": "toshiba monitor", "price": 643.9 }, { "name": "apple monitor", "price": 755.5 }], 
    "hard-drives": [{ "name": "apple hard-drive", "price": 255.5 }, { "name": "acme hard-drive", "price": 55.5 }, { "name": "samsung hard-drive", "price": 155.5 }, { "name": "toshiba hard-drive", "price": 155.5 }], 
    "all": [{ "name": "asus keyboard", "price": 15.5 }, { "name": "logitech keyboard", "price": 41.5 }, { "name": "apple keyboard", "price": 21.8 }, { "name": "dell keyboard", "price": 12.2 },{ "name": "asus laptop", "price": 1248.8 }, { "name": "dell laptop", "price": 1200.8 }, { "name": "apple laptop", "price": 1999.9 }, { "name": "toshiba laptop", "price": 933.8 }, { "name": "samsung laptop", "price": 854.9 },{ "name": "asus monitor", "price": 544.9 }, { "name": "toshiba monitor", "price": 643.9 }, { "name": "apple monitor", "price": 755.5 }, { "name": "apple hard-drive", "price": 255.5 }, { "name": "acme hard-drive", "price": 55.5 }, { "name": "samsung hard-drive", "price": 155.5 }, { "name": "toshiba hard-drive", "price": 155.5 }] } ,
}


  switchCat = activeCat => this.setState({ activeCat });

  switchTab = (i) => {this.setState({ activeTab: i })};

  addItems = (cat,item) => {

    
    // const items = { ...this.state.items, :[item] }
    
    const items = this.state.items.hasOwnProperty(cat) ? { ...this.state.items, [cat]: [...this.state.items[cat], item] } : null;
    
    // const items =  { ...this.state.items, [cat]: [...this.state.items[cat], item] }

    console.log(items)
    
    this.setState({ items })
  };

  addCat = (cat) => {
    const categories = [ ...this.state.categories, cat]
    this.setState({ categories })
  }

  deleteItem = (i)=>{
    const items = [...this.state.items]
    items.splice(i,1)
    this.setState({items:items})
  }

  render() {


 
    const content = [
      <Items
      items={this.state.items[this.state.categories[this.state.activeCat]]}
      deleteItem={this.deleteItem}
      />,
      <AddItems
      addItems={this.addItems}
      categories={this.state.categories}
      />,
      <Categories
      addCat={this.addCat}
      />,
      <Statistics
      items={this.state.items[this.state.categories[this.state.activeCat]]}
      allItems={this.state.items.all}
      />,
    ]


    return (
      <div className="container">
        <Header tabs={this.state.tabs}
                active={this.state.activeTab}
                switchTab={this.switchTab}/>
        <Sidebar 
        active={this.state.activeCat}
        switchCat={this.switchCat}
        categories={this.state.categories}/>
        {content[this.state.activeTab]}
      </div>
      
    );


  }
}

export default App;
