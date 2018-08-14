import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('dynamicRoute', 'step-one');
  },

  dynamicRoute: null,
  
  actions: {
    stepOne() {
      this.set('dynamicRoute', 'step-one');
    },
    stepTwo() {
      this.set('dynamicRoute', 'step-two');
    }
  }
});
