import { DeclaratieCreatePo } from './declaratie-create.po';
import {browser, by, element} from 'protractor';

describe('declaration-create', () => {
  let page: DeclaratieCreatePo;

  const path = require('path');

  beforeEach(() => {
    page = new DeclaratieCreatePo();
    // Given
    page.navigateTo();
    browser.driver.sleep(500);
  });

  it('GAT2_AC2_De medewerker kan een declaratie met invalide data niet indienen', () => {

    // When
    page.getDescription().sendKeys('');
    page.getPrice().sendKeys(-123);
    page.getEmpMessage().sendKeys('');
    const form  = page.getForm().getAttribute('class');

    // browser.driver.sleep(3000);

    // Then
    expect(form).toContain('ng-invalid');
  });

  it('GAT1_AC1_De medewerker kan een declaratie indienen', () => {
    // browser.driver.sleep(6500);

    // When
    page.getDescription().sendKeys('Dit is mijn omschrijving');
    page.getPrice().sendKeys(500);
    page.getEmpMessage().sendKeys('Ik hou van bier :D');
    const fileToUpload = '../testfiles/testimage.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);
    element(by.css('input[type="file"]')).sendKeys(absolutePath);
    const form  = page.getForm().getAttribute('class');

    // browser.driver.sleep(3000);

    // Then
    expect(form).toContain('ng-valid');
  });
});
