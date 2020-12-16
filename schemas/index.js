const mongoose = require('mongoose');

const { MONGO_ID, MONGO_PW, NODE_ENV } = process.env;
const MONGO_URL = `mongodb://${MONGO_ID}:${MONGO_PW}@localhost:27017/admin`;

module.exports = () => {
  const connect = () => {
    if (NODE_ENV !== 'production') {
      mongoose.set('debug', true);
    }
    mongoose.connect(MONGO_URL, {
      dbName: 'gifchat',
    }, err => {
      if (err) {
        console.log('\n[ERROR] MongoDB Connection Error!\n', err);
      } else {
        console.log('MongoDB Connection Success!');
      }
    })
  };
  connect();

  mongoose.connection.on('error', error => {
    console.error('\n[ERROR] MongoDB Connection Error!\n', error);
  });
  mongoose.connection.on('disconnected', () => {
    console.error('몽고디비 연결이 끊김 재시도 할거임');
    connect();
  });

  require('./chat');
  require('./room');
}