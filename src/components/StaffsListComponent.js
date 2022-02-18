import React, { useState } from "react";
import { Card, CardImg, CardText, Form, Input, InputGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";

//Render thông tin chi tiết từng nhân viên
function RenderStaffList({ staff}) {
  return (
    <Card>
      <Link to={`/staff/${staff.id}`}>
        <CardImg width="100%" src={staff.image} alt={staff.name} />
        <div className="text-center">
          <CardText>{staff.name}</CardText>
        </div>
      </Link>
    </Card>
  );
}

const StaffList = (props) => {

  const [searchInput, setSearchInput] = useState("");
  const [searchStaff, setSearchStaff] = useState(props.staff);

  //Bắt sự kiện nhấn nút tìm kiếm
  const submitSearch = (e) => {
    e.preventDefault();
    searchName(searchInput);
  };
  //Hàm tìm kiếm
  const searchName = (value) => {

    const name = value;
    if (name !== "") {
      const result = props.staff.filter((s) =>
        s.name.toLowerCase().match(name.toLowerCase())
      );
      if (result.length > 0) {
        setSearchStaff(result);
      } else {
        alert("Không tìm thấy kết quả");
      }
    } else {
      setSearchStaff([...props.staff]);
    }
  };

  const staff = searchStaff.map((staff) => {
    return (
      <div className="col-lg-2 col-md-4 col-6" key={staff.id}>
        <RenderStaffList staff={staff} onClick={props.onClick} />
      </div>
    );
  });

  //Render danh sách nhân viên
  return (
    <div className="container">
      <div key={props.id} className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <h3 className="staff ">Nhân Viên</h3>
        </div>
        {/* Form tìm kiếm nhân viên */}
        <div className="col-12 col-md-6 col-lg-9">
            <Form onSubmit={submitSearch} className="form">
              <InputGroup>
                <Input type="text" id="search" name="search" value={searchInput} 
                  onChange={(e) => setSearchInput(e.target.value)} placeholder="Tìm kiếm tên nhân viên"
                />
                <Button type="submit" value="name" color="primary" className="search">
                  Tìm kiếm
                </Button>
              </InputGroup>
            </Form>
        </div>
      </div>
      
      <hr></hr>
      <div className="row" key={props.id}>
        {staff}
      </div>
    </div>
  );
};
export default StaffList;
