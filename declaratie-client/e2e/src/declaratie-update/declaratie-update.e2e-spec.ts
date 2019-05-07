import { DeclaratieUpdatePo } from './declaratie-update.po';
import {browser, by, element} from 'protractor';

describe('declaration-create', () => {
  let page: DeclaratieUpdatePo;

  const path = require('path');

  beforeEach(() => {
    page = new DeclaratieUpdatePo();
    // Given
    page.navigateToDeclarationOverview();
    browser.driver.sleep(500);
  });

  it('GAT2_AC2_De medewerker kan een afgekeurde of ingediende declaratie met invalide data niet wijzigen', () => {

    // When

    // const dec = page.getSubmittedOrRejectedDeclaration();

    // expect(dec.count()).toBeGreaterThan(4);
    // expect(dec.getText()).toContain('SUBMITTED');

    // let status = page.getFirstDeclaration().element(by.className('mat-column-status'))

    // page.getDescription().sendKeys('');
    // page.getPrice().sendKeys(-123);
    // page.getEmpMessage().sendKeys('');
    // const form  = page.getForm().getAttribute('class');

    // browser.driver.sleep(10000);

    // Then
    // expect(form).toContain('ng-invalid');
  });

  // it('GAT1_AC1_De medewerker kan een afgekeurde of ingediende declaratie wijzigen', () => {
  //
  //   // When
  //   page.getDescription().sendKeys('Dit is mijn omschrijving');
  //   page.getPrice().sendKeys(500);
  //   page.getEmpMessage().sendKeys('Ik hou van bier :D');
  //   const fileToUpload = '../testfiles/testimage.png';
  //   const absolutePath = path.resolve(__dirname, fileToUpload);
  //   element(by.css('input[type="file"]')).sendKeys(absolutePath);
  //   const form  = page.getForm().getAttribute('class');
  //
  //   browser.driver.sleep(3000);
  //
  //   // Then
  //   expect(form).toContain('ng-valid');
  // });
});
