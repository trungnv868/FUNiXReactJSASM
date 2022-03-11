import React from "react";
import { Card } from "reactstrap";
import { Loading } from "./LoadingComponent";
import { Link } from "react-router-dom";

//Render thông tin từng phòng ban
const RenderDepartment = ({ department, isLoading, errMess }) => {
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else
    return (
      <Card className="p-1">
        <Link to={`/department/${department.id}`}>
          <h4 className="py-1">{department.name}</h4>
          <p>Số lượng nhân viên: {department.numberOfStaff}</p>
        </Link>
      </Card>
    );
};

//Phòng ban
function Department(props) {

  //Duyệt danh sách phòng ban
  const department = props.department.department.map((department) => {
    return (
      <div className="col-lg-4 col-md-6 col-12" key={department.id}>
        <RenderDepartment department={department} />
      </div>
    );
  });
  //Danh sách phòng ban
  if (props.department.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.department.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.department.errMess}</h4>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="container">
        <div className="row">{department}</div>
      </div>
    );
}

export default Department;
