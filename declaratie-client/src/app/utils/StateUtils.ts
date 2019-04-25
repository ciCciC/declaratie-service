import {StatusEnum} from '../models/StatusEnum';
import {RoleEnum} from '../models/RoleEnum';

export class StateUtils {

  private static rulesForEmp: StatusEnum [] = [StatusEnum.REJECTED, StatusEnum.SUBMITTED];
  private static rulesForManDelete: StatusEnum [] = [StatusEnum.REJECTED, StatusEnum.SUBMITTED];
  private static rulesForManUpdate: StatusEnum [] = [StatusEnum.REJECTED, StatusEnum.SUBMITTED, StatusEnum.INPROGRESS];

  private static isEmpAllowedToUpdate(statusEnum: StatusEnum): boolean {
    return this.rulesForEmp.some(value => value === statusEnum);
  }

  private static isManAllowedToUpdate(statusEnum: StatusEnum): boolean {
    return this.rulesForManUpdate.some(value => value === statusEnum);
  }

  private static isEmpAllowedToDelete(statusEnum: StatusEnum): boolean {
    return this.rulesForEmp.some(value => value === statusEnum);
  }

  private static isManAllowedToDelete(statusEnum: StatusEnum): boolean {
    return this.rulesForManDelete.some(value => value === statusEnum);
  }

  static isAllowedToUpdate(statusEnum: StatusEnum, roleEnum: RoleEnum): boolean {
    let status: boolean;
    if (roleEnum === RoleEnum.MANAGER) {
      status = this.isManAllowedToUpdate(statusEnum);
    }

    if (roleEnum === RoleEnum.MEDEWERKER) {
      status = this.isEmpAllowedToUpdate(statusEnum);
    }
    return status;
  }

  static isAllowedToDelete(statusEnum: StatusEnum, roleEnum: RoleEnum): boolean {
    let status: boolean;
    if (roleEnum === RoleEnum.MANAGER) {
      status = this.isManAllowedToDelete(statusEnum);
    }

    if (roleEnum === RoleEnum.MEDEWERKER) {
      status = this.isEmpAllowedToDelete(statusEnum);
    }
    return status;
  }
}
