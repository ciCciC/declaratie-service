import {IDeclaration} from '../models/imodels/IDeclaration';
import {StatusEnum} from '../models/StatusEnum';


export const DECLARATIONS: IDeclaration[] = [
  { id: 0, description: 'Gasoline', amount: 120, date: new Date().toISOString(), empId: 1, empComment: 'Trust this declaration',
    manComment: '', status: StatusEnum.SUBMITTED,
    files: []},
  { id: 1, description: 'Food for good', amount: 10, date: '1-1-2019', empId: 1, empComment: 'Trust this declaration',
    manComment: 'Shall I trust it?', status: StatusEnum.INPROGRESS,
    files: []}
];
