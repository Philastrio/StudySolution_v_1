"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoSchema = new _mongoose.default.Schema({
  fileUrl: {
    type: String,
    required: 'File URL is requried'
  },
  title: {
    type: String,
    required: 'Title is required'
  },
  description: String,
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },

  /* Comment.js의 커맨트 아이디 배열을 만들어서 서로연결 시켜주는 것
     따라서 댓글 수를 알고자 할때 배열의 길이 comments.length로 아는 것이다.  */
  comments: [{
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  creator: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'User'
  }
});

var model = _mongoose.default.model('Video', VideoSchema);

var _default = model;
exports.default = _default;