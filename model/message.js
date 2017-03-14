'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = Schema({
  username: { type: String, required: true},
  to_user_id:{ type: Schema.Types.ObjectId, required: true},
  from_user_id: { type: Schema.Types.ObjectId, required: true},
  timestamp: { type: Date, required: true},
  text : { type: String, required: true},
});

module.exports.model('message', messageSchema);
