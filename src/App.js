import React, { Component } from 'react';
import StaffList from './components/StaffsList';
import { STAFFS } from './shared/staffs';
import { Navbar } from 'reactstrap';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS  
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color='primary text-light'>
          <div className= "Header">
            <h4 className= "heading" >Ứng dụng quản lý nhân sự v1.0</h4>
          </div>
        </Navbar>
        <div clasname="wrap">
          <div className="container">
            <StaffList staff={this.state.staffs} />
          </div>
        </div>
          
      </div>
    );
  }
}
export default App;

