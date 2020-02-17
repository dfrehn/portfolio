import React, {Component} from 'react'
import './App.css'
import {Grid} from '@material-ui/core'
// import PhotoGallery from './components/PhotoGallery'
import NavBar2 from './components/NavBar2'
// import SlideShow from './components/SlideShow'
import Routing from './Routing'


class App extends Component {
  showSettings (event) {
    event.preventDefault();
  }
  
  render() {
  return (
    <div>
      <Grid container >
        <Routing />
      <Grid item>
        <NavBar2/>
      </Grid>
      </Grid>

    </div>
  )
}
}



export default App;


/* <PhotoGallery /> */


/*


DIFFERENT OPTION FOR HAMBURGER MENU


import { bubble as Menu } from 'react-burger-menu' 


<Menu styles={styles}>
<a id="home" className="menu-item" href='/'>Home</a>
<a id="about" className="menu-item" href='/about'>About</a>
<a id="contact" className="menu-item" href='/contact'>Contact</a>
<a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
</Menu>

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px',
  },
  bmBurgerBars: {
    background: 'black'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: 'white',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  },
  photoGallery:{
    height: 'auto',
  },
}


*/