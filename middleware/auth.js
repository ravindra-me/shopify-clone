const slugify = require('slugify');
var jwt = require('jsonwebtoken');
const User = require('../model/User');

module.exports = {
  slug: function (title) {
    return slugify(title.toLowerCase(), '-');
  },
  verifyToken: async (req, res, next) => {
    const token = req.headers.authorization;
    try {
      const payload = await jwt.verify(token, process.env.SECRET);
      console.log(payload);
      req.user = payload;
      next();
    } catch (error) {
      res.status(401).json({
        message: 'user authentication failed',
      });
    }
  },
  verifyTokenOfAdmin: async (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token);
    try {
      const payload = await jwt.verify(token, process.env.SECRET);
      const user = await User.findById(payload.userId);
      if (user.isAdmin) {
        req.user = payload;
        next();
      } else {
        return new Error();
      }
    } catch (error) {
      console.log(error);
      res.status(401).json({
        message: 'user authentication failed',
      });
    }
  },
};
