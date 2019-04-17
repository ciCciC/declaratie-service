import {IMessageDialog} from './imodels/IMessageDialog';

export class MessageCreator {

  static toUpdate() {
    const toUpdate: IMessageDialog = {
      name: 'Bericht',
      message: 'Declaratie wijzigen?'
    };
    return toUpdate;
  }

  static toDelete() {
    const toDelete: IMessageDialog = {
      name: 'Bericht',
      message: 'Verwijderen?'
    };
    return toDelete;
  }
}
