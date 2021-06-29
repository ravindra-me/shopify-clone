const User = require('../model/User');
const auth = require('../middleware/auth');

module.exports = {
  singleUser: async (req, res, next) => {
    try {
      const user = await User.findById(req.user.userId);
      const { firstName, isAdmin, lastName, image, email, number, address } =
        user;
      res.json({
        user: {
          firstName,
          isAdmin,
          lastName,
          image,
          email,
          number,
          address,
        },
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  newUser: async (req, res, next) => {
    try {
      const { user } = req.body;
      const newuser = await User.create(user);
      var token = await newuser.signToken();
      console.log(token);
      res.json({ user: newuser.userJson(token) });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  loginUser: async (req, res, next) => {
    const { email, password } = req.body.user;
    if (!email || !password) {
      res.status(400).json({ error: 'Email/password required' });
    }
    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        res.status(400).json({ error: 'Email is not ragistered' });
      }
      const result = user.verifyPassword(password);
      if (!result) {
        res.status(400).json({ error: 'Invailid password' });
      }
      var token = await user.signToken();
      res.json({ user: user.userJson(token) });
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
