const Users = require("../models/User");

module.exports = {
  //Cadastrar usuário
  async store(req, res) {
    //Verificar se usuário já existe pelo email
    const { email } = req.body;
    if (await Users.findOne({ email })) {
      return res.status(400).json({ error: "User already exists" });
    }
    const user = await Users.create(req.body);
    return res.json(user);
  },
  //Buscar usuário
  async index(req, res) {
    const user = await Users.findOne({ email: req.params.email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    return res.json(user);
  },
  //Excluir usuário pelo ID
  async destroy(req, res) {
    await Users.deleteOne({ _id: req.params.id });
    return res.json({ message: "User successfully excluded" });
  },
  //Alterar usuário
  async uptade(req, res) {
    const user = await Users.findOneAndUpdate(req.params.email, req.body, {
      new: true
    });
    return res.json(user);
  },
  //Listar usuários
  async list(req, res) {
    const user = await Users.find({});
    return res.json(user);
  }
};
