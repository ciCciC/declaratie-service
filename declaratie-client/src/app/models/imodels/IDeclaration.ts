import {StatusEnum} from '../StatusEnum';

export interface IDeclaration {
  id: number;
  description: string;
  date: string;
  amount: number;
  status: StatusEnum;
  files: any;
  manComment: string;
  empComment: string;
  empId: number;
}
