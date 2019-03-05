import {IDeclaration} from './imodels/IDeclaration';
import {DeclarationFile} from './DeclarationFile';
import {StatusEnum} from './StatusEnum';

export class Declaration implements IDeclaration {
  id: number;
  description: string;
  date: string;
  amount: number;
  status: string;
  files: string;
  man_comment: string;
  emp_comment: string;
  emp_id: number;
}
