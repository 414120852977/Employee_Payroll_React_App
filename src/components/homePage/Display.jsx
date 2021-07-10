import React from 'react';
import './display.scss'
import deleteIcon from '../../assets/icons/delete-black-18dp.svg';
import editIcon from '../../assets/icons/create-black-18dp.svg';
import { deleteEmployee } from '../../services/axios-service';
import profile from '../../assets/profile-images/Ellipse -1.png';
import profile1 from '../../assets/profile-images/Ellipse -3.png';
import profile2 from '../../assets/profile-images/Ellipse 1.png';
import profile3 from '../../assets/profile-images/Ellipse -8.png';
import profile4 from '../../assets/profile-images/Ellipse -7.png';

import { withRouter } from 'react-router-dom';
import { element } from 'prop-types';
import EmployeeService from '../../services/employee-services';
import { useHistory } from 'react-router-dom';
const employeeService = new EmployeeService();

const Display = (props) => {
    
    let history = useHistory();
    const remove = (employeeId) => {
        employeeService.deleteEmployee(employeeId).then(response =>{
            alert("Employee deleted successfully",response.data);
            history.push("/homePage")
            employeeService.getAllEmployees();
            console.log("deleted"); 
        })
        
   }

   const update = (employeeId) => {
    props.history.push(`/payroll-form/${employeeId}`)
    //    employeeService.updateEmployee(employeeId).then(response => {
    //     history.push("/payroll-form")
    //     alert("Employee updated successfully",response.data);
      
    //   })
   }
    return (  
        <div className="table-main"> 
        <table id="display" className="table">
            <tbody>
                <tr key={-1}>
                    <th></th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Note</th>
                    <th>Start Date</th>
                    <th>Actions</th>
                </tr>
                {
                    props.employeeArray && props.employeeArray.map((element, employeeId) => (
                        <tr key={employeeId}>
                            <td>< img src={profile1 } /></td>
                            <td>{element.name}</td>
                            <td>{element.gender}</td>
                            <td>{element.departments && element.departments.map(dept => 
                                (<div className='dept-label'>{dept}</div>))}</td>
                            <td>{element.salary}</td>
                            <td>{element.note}</td>
                            <td>{element.startDate}</td>
                            <td>
                                <img   onClick={() => remove(element.employeeId)} src={deleteIcon} alt="Delete" />
                                <img  onClick={() => update(element.employeeId)} src={editIcon} alt="Edit" />
                            </td>    
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    )
}
export default withRouter(Display);