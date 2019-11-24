
import React, { Component } from 'react'
import './App.css';
import Search from './Search'
import Select from 'react-select';
import { connect } from 'react-redux'
import { searchPlaces } from './actions'
import {SearchAlt} from 'styled-icons/boxicons-regular/SearchAlt';

var data = require('./data.json');

const Addr = [
  { label: "전체", value: ""},
  { label: "강남구", value: "강남구" },
  { label: "강동구", value: "강동구" },
  { label: "관악구", value: "관악구" },
  
  { label: "동작구", value: "동작구" },
  { label: "서초구", value: "서초구" },
]

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      item: '',
      color: 'red',
      addr: "서울",
    }
    this.input = React.createRef();
  }

 
  getItem() {
    let item = data[Math.floor(Math.random()*data.length)];
    this.changeColor();
    this.setState({ item: item })
    let searchWord = this.state.addr + item;
    this.props.dispatch(searchPlaces(searchWord))
  }

  changeColor() {
    const colors =  ["#3BE8B0", "#1AAFD0", "#6A67CE", "#0091C0", "#FC636B", "#E7626A", "#5365FF","#E0749A", "#FC91D4", "#E8768F", "1E976F"]
    const color = colors[Math.floor(Math.random() * colors.length)];
    this.setState({
      color: color
    })
  }

  handleAddr = (selectedOption) => {
    this.setState({ addr: selectedOption})
  }

  handleEnter = (e) => {
    e.preventDefault();
        if(e.keyCode === 13) this.handleAddrChange();
  }

  handleAddrChange = () => {
    console.log(this.input.current.value)
    const newAddr = this.input.current.value
    if(newAddr !== ''){
    this.setState({
      addr: newAddr
    })
    let searchWord = newAddr + this.state.item;
    this.props.dispatch(searchPlaces(searchWord))}
    this.input.current.value = ''
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

    {this.state.item !== '' &&
    <>

    <div>
      <h2>{this.state.addr} {this.state.item} 맛집 </h2>
      <input type = "text" placeholder = "장소 바꿔서 검색" ref= {this.input} onKeyUp = {this.handleEnter}></input> <span onClick = {this.handleAddrChange}><SearchAlt size="30px"/></span>
        { this.props.places.length === 0 && <div> 맛집 정보가 없어요 :( </div>}
        {this.props.places.map((place) => {
          console.log(place)
          let title = place.title.replace('<b>', '').replace('</b>', "").replace('&amp;', '');
         return (<div onClick = {() => 
            window.open('https://map.naver.com/v5/search/'+ title)
         }>{title} {place.address}</div>) 
        }) }
    </div>
    </>}

    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    places: state.search.places,
    isLoading: state.search.isLoading,
  }
}



export default connect(mapStateToProps)(App);