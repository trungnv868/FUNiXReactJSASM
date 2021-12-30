import React, { Component } from 'react';
import { Card } from 'reactstrap';
import StaffDetails from './StaffDetail';

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStaff: null
    }
  }
  
  onStaffSelect(staff){
    this.setState({
      selectedStaff: staff
    })
  }

  renderStaff(staff){
    if (staff != null)
      return (
        <StaffDetails staff={staff} />
      )
    else {
      <div></div>
    }
  }

  render() {
    const staff = this.props.staff.map((staff) => {
      return (
        <Card className="col-lg-3 col-md-6" key={staff.id}>
          <div onClick={ () => this.onStaffSelect(staff)}>
            <div className="img-tag">
              <div className="name"> {staff.name} </div>              
            </div>
          </div>
        </Card>
      )      
    });

    return (
      <div className="container">
        <div className="row">
          {staff}
        </div>
        <div>Bấm vào tên nhân viên để xem thông tin</div>
        <div className="StaffInfo row">
          {this.renderStaff(this.state.selectedStaff)}
        </div>
      </div>
    )
    
  }

}

export default StaffList;