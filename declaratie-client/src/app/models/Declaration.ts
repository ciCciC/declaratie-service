import {IDeclaration} from './imodels/IDeclaration';
import {DeclarationFile} from './DeclarationFile';
import {StatusEnum} from './StatusEnum';

export class Declaration implements IDeclaration {
  id: number;
  description: string;
  date: string;
  amount: number;
  status: StatusEnum;
  files: DeclarationFile[];
  manComment: string;
  empComment: string;
  empId: number;

  /**
   * Stop hier de gewenste properties die men wilt zien in de table component
   */
  static getPropertyNamesForTableComponent() {
    return Object.getOwnPropertyNames({ description: '', amount: 0,
      date: '', status: StatusEnum.SUBMITTED});
  }
}
