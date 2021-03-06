/* eslint-env node */
/* eslint-disable ember/avoid-leaking-state-in-ember-objects*/
'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'internal-blog',

  lazyLoading: {
    enabled: true
  },

  isDevelopingAddon() {
    return true;
  }
});
