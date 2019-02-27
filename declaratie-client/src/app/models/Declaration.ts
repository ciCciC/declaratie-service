import {IDeclaration} from './imodels/IDeclaration';
import {DeclarationFile} from './DeclarationFile';
import {Status} from '../../app/models/Status';

export class Declaration implements IDeclaration {
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
