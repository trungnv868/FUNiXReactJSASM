import React, { useState } from "react";
import { Card, CardText, BreadcrumbItem, Breadcrumb } from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";

//Render lương từng nhân viên
const RenderSalary = ({ staff, salary, isLoading, errMess }) => {
  const formatDecimal = require("format-decimal");
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else
    return (
      <Card>
      <h4 className="py-2">{staff.name}</h4>
      <div className="px-2">
        <p>Mã nhân viên: {staff.id}</p>
        <p>Hệ số lương: {staff.salaryScale}</p>
        <p>Số giờ làm thêm: {staff.overTime}</p>
        <Card className="">
          <CardText>
            Lương:{" "} {formatDecimal(salary, { decimal: ".", thousands: ",", precision: 0,})}{" "} VND
          </CardText>
        </Card>
      </div> 
    </Card>
    );
};

function SalaryTable(props) {

  const [staffList] = useState(props.staffList);
  //Tính lương
  function salaryCalc(salaryScale, overTime) {
    const basicSalary = 3000000;
    const overTimeSalary = 200000;
    return salaryScale * basicSalary + overTime * overTimeSalary;
  }
 
  const staff = staffList.staff.map((staff) => {
    return (
      <div className="col-12 col-md-6 col-lg-4" key={staff.id}>
        <RenderSalary
          staff={staff}
          salary={salaryCalc(staff.salaryScale, staff.overTime)}
        />
      </div>
    );
  });
  //Render bảng lương
  return (
    <div className="container">
    <Breadcrumb>
      <BreadcrumbItem>
        <Link to="/staff">Nhân Viên</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
    </Breadcrumb>
    <div id="sort" className="row">
    </div>
    <div className="row">
      {staff}
    </div>
  </div>
  );
}

export default SalaryTable;
