import config from  '../config/config'
import AxiosService from './AxiosService';
export default class EmployeeService {
    baseUrl = config.baseUrl;
    addEmployee(data) {
        // return (`${this.baseUrl}employee`,data);
        return AxiosService.postService(`${this.baseUrl}employee`,data);
    }
}

