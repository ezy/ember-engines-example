export function initialize(application) {
  application.inject('route', 'simple-store', 'service:simple-store');
}

export default {
  initialize
};
