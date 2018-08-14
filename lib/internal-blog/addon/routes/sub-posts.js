import Route from '@ember/routing/route';
import Store from 'msd-ember-engines/mixins/simple-store';
import { inject } from '@ember/service';

export default Route.extend(Store, {
  simpleStore: inject(),
  model() {
    const store = this.get('simpleStore');
    const storedPosts = store.find("post");
    if (storedPosts.length) {
      console.warn('return stored', storedPosts); // eslint-disable-line no-console
      return { posts: storedPosts.content };
    }
    console.warn('reloading store'); // eslint-disable-line no-console
    return  this.findAll('post');
  }
});
