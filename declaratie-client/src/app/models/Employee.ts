import {IEmployee} from './imodels/IEmployee';


export class Employee implements IEmployee {
  id: number;
  fname: string;
  lname: string;
}
