import Route from '@ember/routing/route';
import Store from 'ember-engines-example/mixins/simple-store'

export default Route.extend(Store, {
  model() {
    return this.findAll('post');
  }
});
