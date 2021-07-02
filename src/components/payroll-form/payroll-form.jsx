import React,{useState, useEffect} from 'react';
import profile1 from '../../assets/profile-images/Ellipse -3.png';
import profile2 from '../../assets/profile-images/Ellipse -1.png';
import profile3 from '../../assets/profile-images/Ellipse -8.png';
import profile4 from '../../assets/profile-images/Ellipse -7.png';
import './payroll-form.scss';
 import logo from '../../assets/icons/logo.png'
 import { useParams, Link, withRouter } from 'react-router-dom';

const PayrollForm = (props) => {
    let initialValue = {
        name: '',
        profileArray: [
            {url: 'C:\Users\ashok\react\employee-payroll\src\assets\profile-images\Ellipse -3.png'},
            {url: 'C:\Users\ashok\react\employee-payroll\src\assets\profile-images\Ellipse -1.png'},
            {url: 'C:\Users\ashok\react\employee-payroll\src\assets\profile-images\Ellipse -8.png'},
            {url: 'C:\Users\ashok\react\employee-payroll\src\assets\profile-images\Ellipse -7.png'}
        ],
        allDepartment: [
            'HR','Sales','Finance','Engineer','Others'
        ],
        departmentValue:[],
        gender:'',
        salary:'',
        day:'1',
        month:'Jan',
        year:'2021',
        startDate:'',
        notes:'',
        id:'',
        profileUrl:'',
        isUpdate: false,
        error: {
            department:'',
            name:'',
            gender:'',
            salary:'',
            profileUrl:'',
            startDate: ''
        }

    }

    const [formValue, setForm] = useState(initialValue);

    const changeValue = (event) => {
        setForm({...formValue, [event.target.name]: event.target.value})
    }

    const onCheckChange = ( name) => {
        let index = formValue.departmentValue.indexOf(name);
        let CheckArray = [...formValue.departmentValue]
        if(index > -1)
        CheckArray.splice(index, 1)
        else
            CheckArray.push(name);
        setForm({...formValue, departmentValue: CheckArray });
    }

    const getChecked = (name) => {
        return formValue.departmentValue && formValue.departmentValue.includes(name);
    }

    const validData = async() => {
        let isError = false;
        let error = {
            department: '',
            name:'',
            gender: '',
            salry: '',
            profileUrl: '',
            startDate: ''
        }

        if(formValue.name.length < 1) {
            error.name ="name is required"
            isError = true;
        }
        if(formValue.gender.length < 1) {
            error.gender ="gender is required"
            isError = true;
        }
        if(formValue.salary.length < 1) {
            error.salary ="salary is required"
            isError = true;
        }
        if(formValue.profileUrl.length < 1) {
            error.profileUrl ="profileUrl is required"
            isError = true;
        }
        if(formValue.departmentValue.length < 1) {
            error.departmentValue ="departmentValue is required"
            isError = true;
        }

        await setForm({...formValue, error: error})
        return isError;
    }

    const save = async (event) => {
        event.preventDefault();
    }
    const reset =() => {
        setForm({...initialValue, id: formValue.id, isUpdate: formValue.isUpdate});
        console.log(formValue);
        
    }

    return (
        <div className="payroll-main">
            <header className = 'header row center'>
                <div className="logo">
                    <img src={logo} alt=""/>
                    
                    <div>
                    <span className = "emp-text">Employee</span><br />
                    <span className = "emp-text emp-payroll">Payroll</span>
                    </div>
                    </div>
                    </header>

                <div className = "content">
                    <form className="form" action="#" onSubmit={save}>
                        <div className = "form-head" >Employee Pay Roll form</div>
                        <div className = "row">
                            <label className="label text" htmlFor="name">Name</label>
                            <input  className = "input" type="text" id = "name" name = "name"  onchange={changeValue} placeholder="your name"></input>
                       </div>
                       <div className = "error"> {formValue.error.name}</div>
                       <div className = "row">
                           <label className= "label text" htmlFor = "profileUrl">Profile image</label>
                           <div className="profile-radio-button">
                               <label>
                                    <input type = "radio" getChecked = {formValue.profileUrl='../../assets/profile-images/Ellipse -3.png'} name ="profileUrl"   onChange = {changeValue}/>
                                    <img className="profile" src = {profile1} />
                                 </label>
                                 <label>
                                    <input type = "radio" getChecked = {formValue.profileUrl='../../assets/profile-images/Ellipse -1.png'} name ="profileUrl" value = "../../assets/profile-images/Ellipse -3.png"  onChange = {changeValue}/>
                                    <img className="profile" src = {profile2} />
                                 </label>
                                 <label>
                                    <input type = "radio" getChecked = {formValue.profileUrl='../../assets/profile-images/Ellipse -8.png'} name ="profileUrl" value = "../../assets/profile-images/Ellipse -3.png"  onChange = {changeValue}/>
                                    <img className="profile" src = {profile3} />
                                 </label>
                                 <label>
                                    <input type = "radio" getChecked = {formValue.profileUrl='../../assets/profile-images/Ellipse -7.png'} name ="profileUrl" value = "../../assets/profile-images/Ellipse -3.png"  onChange = {changeValue}/>
                                    <img className="profile" src = {profile4} />
                                 </label>
                                 </div>
                                 </div>
                                  <div className="error"> {formValue.error.Profile}</div>
                                <div className = "row">
                                    <label className="label text" htmlFor = "gender">Gender</label>
                                    <div>
                                            <input type="radio" id="male" onChange = {changeValue} name = "gender" value="male"/>
                                                <label className="text" htmlFor="male">Male</label>
                                                <input type="radio" id="female" onChange = {changeValue} name = "gender" value="female"/>
                                                <label className="text" htmlFor="female">Female</label>
                                               </div> 
                                        </div> 

                                        <div className="error"> {formValue.error.gender}</div>
                                        <div className = "row">
                                        <label className="label text" htmlFor = "department">Department</label>
                                        <div>
                                                {formValue.allDepartment.map(item => (
                                                 <span key={item}>
                                                 <input className="checkbox" type="checkbox" onChange={() => onCheckChange(item)} name={item}
                                                 defaultChecked={() => getChecked(item)} value={item}/>   
                                                 <label className="text" htmlFor={item}>{item}</label>
                                                 </span>
                                                ))}
                                            </div>
                                            </div>

                                            <div className="error"> {formValue.error.department}</div>

                                            <div className = "row">
                                                <label className="label text" htmlFor="salry">Salary</label>
                                                <input className = "input" type = "number" onchange={changeValue} id="salary"  name = "salary" placeholder="salary"/>
                                        </div>
                                                <div className="error">{formValue.error.salary}</div>

                                                <div className = "row">
                                                    <label className = "label text" htmlFor ="StartDate">Start Date</label>
                                                    <select onchange = {changeValue} id="day" name= "day"> <option value ="1">1</option><option value ="2">2</option></select>
                                                    <select onchange = {changeValue} id="month" name= "month"> <option value ="Jan">January</option><option value ="Feb">Februaury</option></select>
                                                    <select onchange = {changeValue} id="year" name= "year"> <option value ="2020">2020</option></select>
                                                </div>
                                                <div className = "error"> {formValue.error.startDate}</div>

                                                <div className = "row">
                                                    <label className = "label text" htmlFor="notes">Notes</label>
                                                    <textarea onchange= {changeValue} id ="notes"  className="input" name="notes" placeholder="write Notes here" style={{height :'100%'}}></textarea> 
                                                    </div>
                                                    <div className = "buttonParent">
                                                        <a routerLink="" className="resetButton button cancelButton">Cancel</a>
                                                        <div className="submit-reset">
                                                            <button type="submit" className="button submitButton">{formValue.isUpdate ? 'Update' : 'Submit'}</button>
                                                            <button type="button" onclick={reset} className="resetButton button">Reset</button>
                                                        </div>
                                                    </div>
                                </form>
                 </div>
                </div>

        )
    }

export default withRouter(PayrollForm);