'use strict';

System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      function getBooleanFromAttributeValue(value) {
        return value === true || value === 'true';
      }

      _export('getBooleanFromAttributeValue', getBooleanFromAttributeValue);
    }
  };
});