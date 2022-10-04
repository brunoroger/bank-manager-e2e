import { defineConfig } from "cypress";
import cucumber from 'cypress-cucumber-preprocessor'
import { defaultOptions } from '@cypress/browserify-preprocessor'
import { sync } from 'resolve'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const options = {
        ...defaultOptions,
        typescript: sync('typescript'),
      };
      on('file:preprocessor', cucumber(options))
    },
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'http://localhost:8080',
    video: false,
    env: {
      DOCUMENT_INVALID: '12345678901'
    }
  },
});
