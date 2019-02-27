import {DeclarationFile} from '../DeclarationFile';
import {Status} from '../Status';

export interface IDeclaration {
  id: number;
  description: string;
  date: string;
  amount: number;
  status: Status;
  files: DeclarationFile[];
  man_comment: string;
  emp_comment: string;
  emp_id: number;
}
