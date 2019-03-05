import {browser, by, element, Key, promise} from 'protractor';

export class DeclaratieCreatePo {
  navigateTo() {
    return browser.get('/declarationcreate');
  }

  getDescription() {
    return element(by.name('description'));
  }

  getUser() {
    return [element(by.name('emp_id')), element(by.name('Voornaam')), element(by.name('Achternaam'))];
  }

  getDate() {
    // return element(by.id('#mat-input-4'));
    return element(by.name('serDate'));
  }

  getPrice() {
    return [element(by.name('bigNum')), element(by.name('smallNum'))];
  }

  getEmpMessage() {
    return element(by.name('empMessage'));
  }

  getForm() {
    return element(by.name('declarationForm'));
  }

  erase_back_space(times: promise.Promise<string>) {

    times.then(function(text) {
      for (const charac of text) {
        browser.actions().sendKeys(Key.BACK_SPACE).perform();
      }
    });

    // for (const time of times) {
    //   browser.actions().sendKeys(Key.BACK_SPACE).perform();
    // }
  }
}
