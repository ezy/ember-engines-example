# Ember Engines Example App

A small application that provides a robust example of how a standalone ember engine
interacts with it's parent app. In the parent application, there is a single model and route (post)
that is fetched and stored in [Ember Simple Store](https://github.com/toranb/ember-cli-simple-store).
The `simpleStore` service is then shared between the parent app and the ember engine,
allowing the model from the parent to be accessed or fetched fresh on load.
The engine contains a sub-route complete with controller and template, alongside two
components that can be changed dynamically using a param within the `sub-post.js` controller.

![Ember engines example diagram](https://github.com/ezy/ember-engines-example/blob/master/public/engines-diagram.png?raw=true)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-engines-example`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
