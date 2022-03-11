import React, { useEffect } from "react";
import { Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchStaffInDept } from "../redux/ActionCreactors";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

//Render thông tin nhân viên
function RenderStaffInDept({ staff }) {
  return (
    <Card>
      <Link to={`/staff/${staff.id}`}>
        <CardImg width="100%" src={"/asset/images/alberto.png"} alt={staff.image} />
        <div>
          <CardTitle className="text-center">{staff.name}</CardTitle>
        </div>
        </Link>
    </Card>
  );
}

function StaffDept(props) {
  const { deptId } = useParams(); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStaffInDept(deptId)); 
  }, []);

  const dept = useSelector((state) => state.staffInDept); 

  const renderEachStaffInDept = dept.dept.map((department) => {
    return (
      <div className="col-6 col-md-4 col-lg-2">
        <RenderStaffInDept staff={department} />
      </div>
    );
  });

  return (
    <div className="container">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/department">Phòng ban</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="row">{renderEachStaffInDept}</div>
    </div>

  )
}

export default StaffDept;
