const User = require("../models/User");
module.exports = {
  //Cadastrar sessão
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    if (!(await user.compareHash(password))) {
      return res.status(400).json({ error: "Invalid password" });
    }
    const { _id, name } = user;
    return res.json({
      user: { _id, name, email },
      //Gerar token
      token: User.generateToken(user)
    });
  }
};
