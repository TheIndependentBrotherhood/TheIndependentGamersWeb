// Imports
var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = '7N6G3NuPYgAQc3u33K87gnNE68V9ymsmv45asNSsYiqQXRwze6DpGA752yQhJH4a4UU6XQQ249wtgFEBS4LJNkt69GK852dFkCtg8b69H8XK3ua69FFWjdb58MuwRkXsC9qpB969d6643ni3p928ux';

// Exported functions
module.exports = {
  generateTokenForUser: function(userData) {
    return jwt.sign({
      userId: userData.id,
      isAdmin: userData.isAdmin
    },
    JWT_SIGN_SECRET,
    {
      expiresIn: '1h'
    })
  },

  parseAuthorization: function(authorization) {
    return (authorization != null) ? authorization.replace('Bearer ', '') : null;
  },
  
  getUserId: function(authorization) {
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
}
