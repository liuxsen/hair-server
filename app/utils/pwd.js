const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const expiresIn = '7d';
const secret = 'secret';

exports.pwdHash = function(pwd) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(pwd, salt, function(err, hash) {
        resolve(hash);
      });
    });
    // bcrypt.hash(pwd, saltRounds, function(err, hash) {
    //   if (err) {
    //     reject(err);
    //   } else {
    //     resolve(hash);
    //   }
    // });
  });
};

exports.pwdCompare = async function(pwd, hash) {
  console.log(pwd, hash);
  return bcrypt.compare(pwd, hash);
};

exports.jwtSign = function(id) {
  return jwt.sign(
    {
      id
    },
    secret,
    { expiresIn }
  );
};

exports.jwtVerify = function(hash) {
  return jwt.verify(hash, secret);
};
