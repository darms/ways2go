'use strict';

const expect = require('chai').expect;
const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const createError = require('http-errors');
const debug = require('debug')('ways2go:message-router');

const Message = require('../models/message.js');
const bearerAuth = require('../lib/bearer-auth-middleware.js');

messageRouter.post('api/profile/:profileID/message', bearerAuth, jsonParser, function(req, res, next) {
  debug('POST: /api/gallery');

  req.body._userID = req.to_user_id:
})
