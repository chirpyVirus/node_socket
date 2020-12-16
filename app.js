const express = require('express');
const path = require('path');

const morgan = require('morgan');
// const flash = require('flash');
require('dotenv').config();
const app = express();

// const webSocket = require('./socket')

const server = app.listen(3000, () => {
  console.log('3000 포트 노드 서버');
});

