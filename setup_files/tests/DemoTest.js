/**
 * Sample automated test scenario for Nightwatch.js
 *
 * > it navigates to google.com and searches for nightwatch,
 *   verifying if the term 'The Night Watch' exists in the search results
 */

module.exports = {
  '@disabled': false,

  'Navigate to www.google.com' : function (client) {
    client
      .url('http://google.com')
      .waitForElementPresent('body', 1000);
  },

  'Search for Nightwatch' : function (client) {
    client
      .setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  },
};
