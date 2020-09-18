var HtmlReporter = require('protractor-beautiful-reporter');
// An example configuration file.
exports.config = {
  directConnect: true,
  seliniumAddress :'http:localhost:4200',
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['bms.js'],
  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: 'report/screenshots'
    }).getJasmine2Reporter());
 },

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
    expectationResultHandler(passed, assertion) 
    {
      // do something
    }
  }
};
