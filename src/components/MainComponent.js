import React, { Component } from "react";
import StaffDetail from "../components/StaffDetailComponent";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import Header from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
import StaffList from "../components/StaffsListComponent";
import { Switch, Route } from "react-router-dom";
import Department from "./DepartmentComponent";
import SalaryTable from "./SalaryTableComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      department: DEPARTMENTS,
    };
  }

  render() {
    
    const StaffId = ({ match }) => {
      return (
        <StaffDetail
          staff={this.state.staffs.find(
            (staff) => staff.id === + match.params.id
          )}
        />
      );
    };

    return (
      <>
        <Header />
          <div className="main">
            
              <Route
                exact path="/" component={() => <StaffList staff={this.state.staffs} />}
              />
              <Route
                exact path="/staff" component={() => <StaffList staff={this.state.staffs} />}
              />
              <Route
                exact path="/staff/:id" component={StaffId} 
              />
              <Route 
                exact path="/department" component={() => <Department department={this.state.department} />}
              />
              <Route
                path="/salary" component={() => <SalaryTable staffList={this.state.staffs} />}
              />
            
          </div>
        <Footer />
      </>
    );
  }
}

export default Main;