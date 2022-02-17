import React from "react";
import { Card } from "reactstrap";

//Render thông tin từng phòng ban
const RenderDepartment = ({ department }) => {
  return (
    <Card className="p-1">
      <h4 className="py-1">{department.name}</h4>
      <p>Số lượng nhân viên: {department.numberOfStaff}</p>
    </Card>
  );
};

//Phòng ban
function Department(props) {
  //Duyệt danh sách phòng ban
  const department = props.department.map((department) => {
    return (
      <div className="col-lg-4 col-md-6 col-12" key={department.id}>
        <RenderDepartment department={department} />
      </div>
    );
  });
  //Danh sách phòng ban
  return (
    <div className="container">
      <div className="row">{department}</div>
    </div>
  );
}

export default Department;
