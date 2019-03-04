import { DeclaratieCreatePo } from './declaratie-create.po';
import {browser, by, element} from 'protractor';

describe('declaration-create', () => {
  let page: DeclaratieCreatePo;

  beforeEach(() => {
    page = new DeclaratieCreatePo();
    page.navigateTo();
    browser.driver.sleep(500);
  });

  it('Create form should be invalid', () => {

    page.getDescription().sendKeys('');

    page.getDate().click();
    const fieldForDate = element(by.id('mat-input-4'));
    fieldForDate.sendKeys('');
    page.erase_back_space(fieldForDate.getAttribute('value'));

    for (const price of page.getPrice()) {
      price.sendKeys(0);
    }

    page.getEmpMessage().sendKeys('');

    const form  = page.getForm().getAttribute('class');

    expect(form).toContain('ng-invalid');
  });

  it('Create form should be valid', () => {

    page.getDescription().sendKeys('Dit is mijn omschrijving');

    browser.driver.sleep(500);

    page.getDate().click();
    const fieldForDate = element(by.id('mat-input-4'));
    fieldForDate.sendKeys('');
    page.erase_back_space(fieldForDate.getAttribute('value'));
    const date = new Date().toISOString();
    fieldForDate.sendKeys(date);

    page.getPrice()[0].sendKeys(500);
    page.getPrice()[1].sendKeys(50);

    page.getEmpMessage().sendKeys('Ik hou van bier :D');

    const form  = page.getForm().getAttribute('class');

    expect(form).toContain('ng-valid');
  });
});
