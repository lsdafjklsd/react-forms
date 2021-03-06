/**
 * @jsx React.DOM
 */
'use strict';

function invariant(condition, message, a, b, c, d, e) {
  if (!condition) {
    if (message !== undefined) {
      var replacements = [a, b, c, d, e];
      var idx = 0;
      message = message.replace(/%s/g, function() {
        return replacements[idx++];
      });
      throw new Error('invariant violation: ' + message);
    } else {
      throw new Error('invariant violation');
    }
  }
}

module.exports = invariant;
