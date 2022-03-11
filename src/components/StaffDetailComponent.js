import React from "react";
import dateFormat from "dateformat";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Fade, Stagger } from "react-animation-components";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";

function RenderStaff({ staff, departmentId }) {
  if (staff != null)
    return (
      <Stagger in>
        <Fade in>
          <div className=" row">
            <div className="col-lg-3 col-md-4 col-12">
              <img
                className="img"
                src={staff.image}
                style={{ width: "100%" }}
                alt={staff.name}
              />
            </div>
            <div key={staff.id} className="col-lg-9 col-md-8 col-12">
              <h3> {staff.name} </h3>
              <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
              <p>
                Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
              </p>
              {departmentId.map((department) => {
                if (department.id === staff.departmentId) {
                  return (
                    <p key={department.id}>Phòng ban: {department.name}</p>
                  );
                }
              })}
              <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
              <p>Số ngày đã làm thêm: {staff.overTime}</p>
            </div>
          </div>
        </Fade>
      </Stagger>
    );
  else return <div></div>;
}
function StaffDetail(props) {

  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.staff != null)
    return (
      <>
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/staff">Nhân Viên</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="">
            <RenderStaff
              staff={props.staff}
              departmentId={props.department.department}
            />
          </div>
        </div>
      </>
    );
  else return <div></div>;
}

export default StaffDetail;
