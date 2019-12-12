const Commerce = require("../models/Commerce");

module.exports = {
  //Cadastrar comércio
  async store(req, res) {
    const { cnpj } = req.body;
    //Verifica se esse comércio ja existe por meio do CNPJ
    if (await Commerce.findOne({ cnpj })) {
      return res.status(400).json({ error: "Commerce already exists" });
    }
    const commerce = await Commerce.create(req.body);
    return res.json(commerce);
  },
  //Buscar comércio pelo CNPJ
  async index(req, res) {
    const commerce = await Commerce.findOne({ cnpj: req.params.cnpj });
    if (!commerce) {
      return res.status(400).json({ error: "Commerce not found" });
    }

    return res.json(commerce);
  },
  //Excluir comércio
  async destroy(req, res) {
    await Commerce.deleteOne({ _id: req.params.id });
    return res.json({ message: "Commerce successfully excluded" });
  },
  //Alterar comércio
  async uptade(req, res) {
    const commerce = await Commerce.findOneAndUpdate(
      req.params.cnpj,
      req.body,
      {
        new: true
      }
    );
    return res.json(commerce);
  },
  //Listar comércios
  async list(req, res) {
    const commerce = await Commerce.find({});
    return res.json(commerce);
  }
};
