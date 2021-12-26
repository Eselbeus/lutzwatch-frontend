import React from 'react'
import { NavLink } from 'react-router-dom'
import HamburgerMenu from 'react-hamburger-menu';
import '../App.css';

class Nav extends React.Component {
  state = {
    open: false,
    hideOrShowHambugerDropDown: 'hamburgerDropDown'
  }

  handleClick = () => {
    this.setState({open: !this.state.open});
  }

  displayHamburgerMenu = () => {
        return (
            <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick.bind(this)}
                    width={22}
                    height={18}
                    strokeWidth={2}
                    rotate={0}
                    color='#999999'
                    borderRadius={0}
                    animationDuration={0.5}
                />
        )
  }

  mobileNav = () => {
    return (
      <nav className='hamburgerDropDown nav-mobile'>
        <NavLink className="nav-elem" onClick={this.handleClick.bind(this)} to="/">Home</NavLink>
        <NavLink className="nav-elem" onClick={this.handleClick.bind(this)} to="/articles">Articles</NavLink>
      </nav>
    )
  }

  render(){
    return(
      <div className="nav-bar">
        <nav className="nav">
          <NavLink className="nav-elem" to="/">Home</NavLink>
          <NavLink className="nav-elem" to="/articles">Articles</NavLink>
        </nav>
        { this.state.open ?  this.mobileNav() : this.displayHamburgerMenu()}
      </div>
    )
  }

}

export default Nav;
