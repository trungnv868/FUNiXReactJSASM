import React, { Component } from "react";
import { NavItem, Nav, Navbar, NavbarToggler, Collapse } from "reactstrap";
import { NavLink } from "react-router-dom";

// Header
class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }
  // Render Header
  render() {
    return (
      <>
        <Navbar dark expand="md">       
          <NavbarToggler onClick={this.toggleNav} />
          <NavLink to="/staff">
            <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />
          </NavLink>
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar> 
              <NavItem>
                <NavLink className="nav-link" to="/staff">
                  <span className="fa fa-users fa-lg"></span> Nhân Viên
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/department">
                  <span className="fa fa-id-card fa-lg"></span> Phòng Ban
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/salary">
                  <span className="fa fa-money fa-lg"></span> Bảng Lương
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>  
        </Navbar>
      </>
    );
  }
}

export default Header;