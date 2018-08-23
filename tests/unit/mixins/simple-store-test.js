import EmberObject from '@ember/object';
import SimpleStoreMixin from 'ember-engines-example/mixins/simple-store';
import { module, test } from 'qunit';

module('Unit | Mixin | simple-store', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let SimpleStoreObject = EmberObject.extend(SimpleStoreMixin);
    let subject = SimpleStoreObject.create();
    assert.ok(subject);
  });
});
