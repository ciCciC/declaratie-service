// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// const context = require.context('./', true, /image-dialog.component\.spec\.ts$/);
// const context = require.context('./', true, /declarationfile-upload.component\.spec\.ts$/);
// const context = require.context('./', true, /declaration-create.component\.spec\.ts$/);
// const context = require.context('./', true, /declaration-update.component\.spec\.ts$/);
// const context2 = require.context('./', true, /declaration-table.component\.spec\.ts$/);
// const context = require.context('./', true, /declaration-view.component\.spec\.ts$/);
// const context1 = require.context('./', true, /declaration.service\.spec\.ts$/);
// const context = require.context('./', true, /declaration.service\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
// context1.keys().map(context1);
// context2.keys().map(context2);
