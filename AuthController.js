const User = require('./models/User');
const Role = require('./models/Role');
const bcrypt = require('bcryptjs');

class AuthController {
  async registration(req, res) {
    try {
      const { username, password } = req.body;

      // try to find user in DB
      const candidate = await User.findOne({ username });

      if (candidate) {
        // if user exists ---> return error with message
        return res.status(400).json({ message: 'User with this data already exists' });
      }

      // else create password hash, userRole, user, save user!, return request
      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({ value: 'USER' });
      const user = new User({ username, password: hashPassword, roles: [userRole.value] });
      await user.save();

      return res.json({ message: 'Successfully registration!' });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Registration error' });
    }
  }

  async login(req, res) {
    try {
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Login error' });
    }
  }

  async getUsers(req, res) {
    try {
      res.json('Server works');
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new AuthController();
