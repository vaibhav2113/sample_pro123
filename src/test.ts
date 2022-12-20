// This file is required by karma.conf.js and loads recursively all the .spec and framework files

<<<<<<< HEAD
import 'zone.js/testing';
=======
import 'zone.js/dist/zone-testing';
>>>>>>> f0da8e48be82e0888a992503201ff19fb2c6bd9f
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

<<<<<<< HEAD
declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};
=======
declare const require: any;
>>>>>>> f0da8e48be82e0888a992503201ff19fb2c6bd9f

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
<<<<<<< HEAD
  platformBrowserDynamicTesting(),
  { teardown: { destroyAfterEach: true }},
);

=======
  platformBrowserDynamicTesting()
);
>>>>>>> f0da8e48be82e0888a992503201ff19fb2c6bd9f
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
