/* eslint-disable ember/avoid-leaking-state-in-ember-objects*/
import Engine from 'ember-engines/engine';
import loadInitializers from 'ember-load-initializers';
import Resolver from './resolver';
import config from './config/environment';

const { modulePrefix } = config;

const Eng = Engine.extend({
  modulePrefix,
  Resolver,
  dependencies: {
    services: [
      'simple-store'
    ]
  }
});

loadInitializers(Eng, modulePrefix);

export default Eng;
