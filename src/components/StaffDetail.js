import React, { Component } from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';
import dateFormat from 'dateformat';

class StaffDetails extends Component {
    render(props) {
        let staff = this.props.staff;
        
        return (
            <Card className="hhh">                               
                <CardTitle>{staff.name} </CardTitle>
                <CardText>
                    Ngày sinh: {dateFormat(staff.doB, 'dd/mm/yyyy')}
                </CardText>
                <CardText>
                    Ngày vào công ty: {dateFormat(staff.startDate, 'dd/mm/yyyy')}
                </CardText>
                <CardText>
                    Phòng ban: {staff.department.name}
                </CardText>
                <CardText>
                    Số ngày nghỉ còn lại: {staff.annualLeave}
                </CardText>
                <CardText>
                    Số ngày đã làm thêm: {staff.overTime}
                </CardText>           
            </Card>
        )
    }
}

export default StaffDetails;