import config from '../config/config.js';
//const AxiosService = require('./axios-service').default;
import  AxiosService from './axios-service';
const axios = require('axios').default;

const URL = 'http://localhost:8091/employeepayrollservice'

export default class EmployeeService {
   
    addEmployee(data) {
        console.log(data);
        return AxiosService.postService(`${URL}/create`,data);
        
        
    }

    getAllEmployees() {
        return AxiosService.getService(`${URL}/get`);
      }

      deleteEmployee(employeeId){
        return AxiosService.deleteService(`${URL}/delete/${employeeId}`);
    }  

    updateEmployee(employeeId) {
        return AxiosService.putService(`${URL}/update/${employeeId}`);
    }
}