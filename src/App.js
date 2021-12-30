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
        <Navbar dark color='primary'>
          <div className= "Header">
            <h3 className= "heading" >Ứng dụng quản lý nhân sự v1.0</h3>
          </div>
        </Navbar>

        <StaffList staff={this.state.staffs} />
      </div>
    );
  }
}
export default App;

