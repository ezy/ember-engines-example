import Mixin from '@ember/object/mixin';
import { inject } from '@ember/service';
import RSVP from 'rsvp';
import $ from 'jquery';

export default Mixin.create({
  simpleStore: inject(),
  findAll(model) {
    console.warn('store loading'); // eslint-disable-line no-console
    const simpleStore = this.get("simpleStore");
    return new RSVP.Promise(function(resolve, reject) {
      $.getJSON(`/api/${model}/`).then(function(data) {
        let key = Object.keys(data)[0];
        data[key].forEach(function(modelData) {
          simpleStore.push(model, modelData);
        });
        resolve(data);
        return simpleStore.find(model)
      }, function(jqXHR) {
        reject(jqXHR);
      });
    });
  }
});
