import React from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

//Render danh sách nhân viên
function RenderStaffList({ staff }) {
  return (
    <Card>
      <Link to={`/staff/${staff.id}`}>
        <CardImg width="100%" src={staff.image} alt={staff.name} />
        <div className="text-center">
          <CardTitle>{staff.name}</CardTitle>
        </div>
      </Link>
    </Card>
  );
}


//Danh sách nhân viên
const StaffList = (props) => {
  const staff = props.staff.map((staff) => {
    return (
      <div className="col-lg-2 col-md-4 col-6" key={staff.id}>
        <RenderStaffList staff={staff} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="staff">Nhân Viên</h3>
        </div>
      </div>
      <div className="row" key={props.id}>
        {staff}
      </div>
    </div>
  );
};

export default StaffList;
