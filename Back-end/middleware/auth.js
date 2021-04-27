// Imports
var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = '7N6G3NuPYgAQc3u33K87gnNE68V9ymsmv45asNSsYiqQXRwze6DpGA752yQhJH4a4UU6XQQ249wtgFEBS4LJNkt69GK852dFkCtg8b69H8XK3ua69FFWjdb58MuwRkXsC9qpB969d6643ni3p928ux';


exports.generateTokenForUser = function(userData) {
  return jwt.sign({
    userId: userData.id,
    isAdmin: userData.isAdmin
  },
  JWT_SIGN_SECRET,
  {
    expiresIn: '24h'
  })
}

exports.parseAuthorization = function(authorization) {
  return (authorization != null) ? authorization.replace('Bearer ', '') : null;
}
  
exports.getUserId = function(authorization) {
  let userId = -1;
  let token = module.exports.parseAuthorization(authorization);
  if(token != null) {
    try {
      let jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
      if(jwtToken != null)
        userId = jwtToken.userId;
    } catch(err) { }
  }
  return userId;
}

exports.userRequest  = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, JWT_SIGN_SECRET);
    const userId = decodedToken.userId;
    console.log(req.body);
    if(req.body.userId && Number(req.body.userId) !== userId) {
      throw 'Invalid user Id';
    } else {
      next();
    }
  } catch(err) {
    res.status(401).json({
      error: (err + ', Invalid request!')
    })
  }
}

exports.adminRequest = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, JWT_SIGN_SECRET);
    const userId = decodedToken.userId;
    const userIsAdmin = decodedToken.isAdmin
    console.log(userIsAdmin);
    if(req.body.userId && Number(req.body.userId) !== userId) {
      throw 'Invalid user Id';
    } else if(userIsAdmin == true){
      next();
    } else {
      res.status(403).json({
        error: ('Vous n\'êtes pas administrateur')
      })
    }
  } catch(err) {
    res.status(401).json({
      error: (err + ', Invalid request!')
    })
  }
}
