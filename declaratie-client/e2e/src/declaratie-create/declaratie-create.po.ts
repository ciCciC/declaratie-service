import {browser, by, element, Key, promise} from 'protractor';

export class DeclaratieCreatePo {
  navigateTo() {
    return browser.get('/declarationcreate');
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

  erase_back_space(times: promise.Promise<string>) {

    times.then(function(text) {
      for (const charac of text) {
        browser.actions().sendKeys(Key.BACK_SPACE).perform();
      }
    });
  }
}
