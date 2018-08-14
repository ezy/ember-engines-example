import Route from '@ember/routing/route';
import Store from 'msd-ember-engines/mixins/simple-store'

export default Route.extend(Store, {
  model() {
    return this.findAll('post');
  }
});
