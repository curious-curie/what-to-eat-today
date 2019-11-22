
import React, { Component } from 'react'
import './App.css';
import Search from './Search'

var data = require('./data.json'); 

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      item: '',
      color: 'red',
    }
  }

  getItem() {
    var item = data[Math.floor(Math.random()*data.length)];
    this.changeColor();
    this.setState({ item: item })
  }

  changeColor() {
    const colors =  ["#3BE8B0", "#1AAFD0", "#6A67CE", "#0091C0", "#FC636B", "#E7626A", "#5365FF","#E0749A", "#FC91D4", "#E8768F", "1E976F"]
    const color = colors[Math.floor(Math.random() * colors.length)];
    this.setState({
      color: color
    })
  }

  render() {
    const styles = {
        backgroundColor: this.state.color,
        boxShadow : "0px 0px 0px 7px " + this.state.color,
    }

    return (
    <div className="App">
     
      <div className = "main-title"
      >오늘 뭐 먹지?</div>
      <div>
      
    
    
    { this.state.item !== '' &&
        <div className = "card" style={styles}>
            {this.state.item}         </div>}
    </div>
      <button className = "food-button" onClick = { () => this.getItem()}>
    {this.state.item === '' ? <span>뭐 먹지?</span> :  <span>딴거!</span>}
    </button>
    </div>
    )
  }
}



