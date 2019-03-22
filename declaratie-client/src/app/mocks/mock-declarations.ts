import {IDeclaration} from '../models/imodels/IDeclaration';
import {StatusEnum} from '../models/StatusEnum';


export const DECLARATIONS: IDeclaration[] = [
  { id: 1, description: 'Gasoline', amount: 1200, date: '1-1-2019', emp_id: 1, emp_comment: 'Trust this declaration',
    man_comment: 'Shall I trust it?', status: StatusEnum.INPROGRESS,
    files: ''},
  { id: 2, description: 'Food for good', amount: 10, date: '1-1-2019', emp_id: 1, emp_comment: 'Trust this declaration',
    man_comment: 'Shall I trust it?', status: StatusEnum.INPROGRESS,
    files: ''},
  { id: 3, description: 'Bier for a extra Tier', amount: 5500, date: '1-1-2019', emp_id: 1, emp_comment: 'Trust this declaration',
    man_comment: 'Shall I trust it? No..', status: StatusEnum.INPROGRESS,
    files: ''},
  { id: 4, description: 'Bier for a extra Tier', amount: 5500, date: '1-1-2019', emp_id: 1, emp_comment: 'Trust this declaration',
    man_comment: 'Shall I trust it? No..', status: StatusEnum.INPROGRESS,
    files: ''},
  { id: 5, description: 'Bier for a extra Tier', amount: 5500, date: '1-1-2019', emp_id: 1, emp_comment: 'Trust this declaration',
    man_comment: 'Shall I trust it? No..', status: StatusEnum.INPROGRESS,
    files: ''},
  { id: 6, description: 'Bier for a extra Tier', amount: 5500, date: '1-1-2019', emp_id: 1, emp_comment: 'Trust this declaration',
    man_comment: 'Shall I trust it? No..', status: StatusEnum.SUBMITTED,
    files: ''},
  { id: 7, description: 'Bier for a extra Tier', amount: 5500, date: '1-1-2019', emp_id: 1, emp_comment: 'Trust this declaration',
    man_comment: 'Shall I trust it? No..', status: StatusEnum.SUBMITTED,
    files: ''},
  { id: 8, description: 'Bier for a extra Tier', amount: 5500, date: '1-1-2019', emp_id: 1, emp_comment: 'Trust this declaration',
    man_comment: 'Shall I trust it? No..', status: StatusEnum.APPROVED,
    files: ''},
  { id: 9, description: 'Bier for a extra Tier', amount: 5500, date: '1-1-2019', emp_id: 1, emp_comment: 'Trust this declaration',
    man_comment: 'Shall I trust it? No..', status: StatusEnum.APPROVED,
    files: ''}
];
