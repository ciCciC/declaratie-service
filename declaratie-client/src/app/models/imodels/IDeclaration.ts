import {StatusEnum} from '../StatusEnum';
import {DeclarationFile} from '../DeclarationFile';

export interface IDeclaration {
  id: number;
  description: string;
  date: string;
  amount: number;
  status: StatusEnum;
  files: DeclarationFile[];
  manComment: string;
  empComment: string;
  empId: number;
}
