import React, { useState } from "react";
import { Button, Card, CardText, BreadcrumbItem, Breadcrumb} from "reactstrap";
import { Link } from "react-router-dom";

//Render lương
const RenderSalary = ({ staff, salary }) => {
  const formatDecimal = require("format-decimal");
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
//Bảng lương
function SalaryTable(props) {

  const [staffList, setStaffList] = useState(props.staffList);
  //Tính lương
  function salaryCalc(salaryScale, overTime) {
    const basicSalary = 3000000;
    const overTimeSalary = 200000;
    return salaryScale * basicSalary + overTime * overTimeSalary;
  }
  //Sắp xếp theo lương
  function sortSalary(sorttype) {
    let sortedStaffList = [...staffList];
    let salaryA = 0;
    let salaryB = 0;
    //Giảm dần
    if (sorttype === "decrease") {
      sortedStaffList.sort(function (a, b) {
        salaryA = salaryCalc(a.salaryScale, a.overTime);
        salaryB = salaryCalc(b.salaryScale, b.overTime);
        return salaryB - salaryA;
      });
    }
    //Tăng dần
    if (sorttype === "increase") {
      sortedStaffList.sort(function (a, b) {
        salaryA = salaryCalc(a.salaryScale, a.overTime);
        salaryB = salaryCalc(b.salaryScale, b.overTime);
        return salaryA - salaryB;
      });
    }

    setStaffList(sortedStaffList);
  }

  const staff = staffList.map((staff) => {
    return (
      <div className="col-12 col-md-6 col-lg-4" key={staff.id}>
        <RenderSalary
          staff={staff}
          salary={salaryCalc(staff.salaryScale, staff.overTime)}
        />
      </div>
    );
  });

  return (
    <div className="container">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/staff">Nhân Viên</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
      </Breadcrumb>
      <div id="sort" className="row">
        <div className="col-12">
          <h5>Sắp Xếp Theo Lương</h5>
        </div>
        <div className="col-12 my-3">
          <Button className="me-3" onClick={() => sortSalary("increase")}>
            <span className="fa fa-sort-amount-asc"></span> Tăng dần
          </Button>
          <Button onClick={() => sortSalary("decrease")}>
            <span className="fa fa-sort-amount-desc"></span> Giảm dần
          </Button>
        </div>
      </div>
      <div className="row">{staff}</div>
    </div>
  );

}

export default SalaryTable;
