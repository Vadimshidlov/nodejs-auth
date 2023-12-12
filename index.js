const express = require('express');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const authRouter = require('./AuthRouter');

const app = express();
app.use(express.json()); // function for parsing JSON after requests for this host;
app.use('/auth', authRouter);

const start = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://dyadyavadyaaa:230198vadimkaaa@cluster0.godm1h5.mongodb.net/auth_roles?retryWrites=true&w=majority'
    ); // connect with DB
    app.listen(PORT, () => console.log(`The server has started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
