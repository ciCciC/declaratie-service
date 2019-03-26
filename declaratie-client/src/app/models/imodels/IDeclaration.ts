import {StatusEnum} from '../StatusEnum';

export interface IDeclaration {
  id: number;
  description: string;
  date: string;
  amount: number;
  status: StatusEnum;
  files: string;
  manComment: string;
  empComment: string;
  emp_id: number;
}
