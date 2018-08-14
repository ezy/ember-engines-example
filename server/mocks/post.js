/* eslint-env node */
'use strict';

const post = {
  id: "qwerty54",
  pType: "page",
  pTitle: "Ut fuga animi aut impedit.",
  pSlug: "ut-fuga-animi-aut-impedit-1534199929492",
  pDate: "2018-07-29T21:23:36.396Z",
  pText: "Nam architecto ratione.",
  pAuthor: "Kay Schmitt",
  pImage: "http://lorempixel.com/640/480",
  pMedia: "http://lorempixel.com/640/480",
  pStatus: "draft",
  pExpiry: "2019-02-23T03:12:26.345Z",
  pFreq: "week",
  createdAt: "2018-08-13T22:38:49.494Z",
  updatedAt: "2018-08-13T22:38:49.494Z"
}

module.exports = function(app) {
  const express = require('express');
  let postRouter = express.Router();

  postRouter.get('/', function(req, res) {
    res.send({ posts: [post] });
  });

  postRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postRouter.get('/:id', function(req, res) {
    post.id = req.params.id;
    res.send({ post });
  });

  postRouter.put('/:id', function(req, res) {
    res.send({
      'post': {
        id: req.params.id
      }
    });
  });

  postRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/post', require('body-parser').json());
  app.use('/api/post', postRouter);
};
