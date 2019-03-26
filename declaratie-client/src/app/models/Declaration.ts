import {IDeclaration} from './imodels/IDeclaration';
import {DeclarationFile} from './DeclarationFile';
import {StatusEnum} from './StatusEnum';

export class Declaration implements IDeclaration {
  id: number;
  description: string;
  date: string;
  amount: number;
  status: StatusEnum;
  files: string;
  manComment: string;
  empComment: string;
  emp_id: number;

  /**
   * Stop hier de gewenste properties die men wilt zien in de table component
   */
  static getPropertyNamesForTableComponent() {
    return Object.getOwnPropertyNames({ description: '', amount: 0,
      date: '', status: StatusEnum.SUBMITTED});
  }
}
