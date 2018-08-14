import { attr, Model } from "ember-cli-simple-store/model";

export default Model.extend({
  pType: attr(),
  pTitle: attr(),
  pSlug: attr(),
  pDate: attr(),
  pText: attr(),
  pAuthor: attr(),
  pImage: attr(),
  pMedia: attr(),
  pStatus: attr(),
  pExpiry: attr(),
  pFreq: attr(),
  createdAt: attr(),
  updatedAt: attr()
});
