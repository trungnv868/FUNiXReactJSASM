import React, { Component } from "react";
import StaffDetail from "../components/StaffDetailComponent";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import Header from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
import StaffList from "../components/StaffsListComponent";
import { Switch, Route, Redirect, withRouter  } from "react-router-dom";
import Department from "./DepartmentComponent";
import SalaryTable from "./SalaryTableComponent";
import { connect } from "react-redux";

// Khai báo state reducer
const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    department: state.department,
  };
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      department: DEPARTMENTS
    };
  }
  onAddStaff = (newStaff) => {
    this.setState({ staffs: [...this.state.staffs, newStaff] });
  };

  render() {
    
    const StaffId = ({ match }) => {
      return (
        <StaffDetail
          staff={
            this.state.staffs.filter(
              (staff) => staff.id === parseInt(match.params.id, 10)
            )[0]
          }
        />
      );
    };

    return (
      <>
        <Header />
          <div className="main">
          <Switch>
          <Route
            exact
            path="/staff"
            component={() => (
              <StaffList
                staff={this.state.staffs}
                onAddStaff={this.onAddStaff}
              />
            )}
          />

          <Route exact path="/staff/:id" component={StaffId} />
          <Route
            exact
            path="/department"
            component={() => <Department department={this.state.department} />}
          />
          <Route
            path="/salary"
            component={() => <SalaryTable staffList={this.state.staffs} />}
          />
          <Redirect to="/staff" />
        </Switch>
          </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));