import {browser, by, element, Key, promise} from 'protractor';
import {forEach} from '@angular/router/src/utils/collection';

export class DeclaratieUpdatePo {
  navigateToDeclarationOverview() {
    return browser.get('/');
  }

  getDeclarations() {
    return element.all(by.css('.mat-row td'));
  }

  getFirstDeclaration() {
    return element(by.className('mat-row'));
  }

  getSubmittedOrRejectedDeclaration() {
    // return this.getDeclarations()
    //   .filter(value => value.element(by.className('mat-column-status')).getText()
    //     .then(val => val.toString() === 'SUBMITTED' || val.toString() === 'REJECTED'));
    return this.getDeclarations()
      .filter(function (elem, index) {
        return elem.element(by.id('status')).getText().then(function(text) { return text.includes('SUBMITTED'); });
      }).first();
  }

  getStatus() {

  }

  getDescription() {
    return element(by.name('description'));
  }

  getUser() {
    return [element(by.name('Voornaam')), element(by.name('Achternaam'))];
  }

  getDate() {
    return element(by.name('date'));
  }

  getPrice() {
    return element(by.name('amount'));
  }

  getEmpMessage() {
    return element(by.name('empMessage'));
  }

  getFiles() {
    return element(by.name('uploadfiles'));
  }

  getForm() {
    return element(by.name('declarationForm'));
  }
}
