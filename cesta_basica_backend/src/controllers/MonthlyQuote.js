const MonthlyQuote = require("../models/MonthlyQuote");

module.exports = {
  //Cadastrar cotação mensal
  async store(req, res) {
    const monthlyquote = await MonthlyQuote.create(req.body);
    return res.json(monthlyquote);
  },
  //Buscar cotação mensal pelo ID
  async index(req, res) {
    const monthlyquoteId = req.params.id;
    const monthlyquote = await MonthlyQuote.findOne({
      _id: monthlyquoteId
    }).populate(["commerce", "user"]);
    return res.json(monthlyquote);
  },
  //Excluir cotação mensal
  async destroy(req, res) {
    await MonthlyQuote.deleteOne({ _id: req.params.id });
    return res.json({ message: "Successfully excluded" });
  },
  //Alterar cotação mensal
  async uptade(req, res) {
    const monthlyquote = await MonthlyQuote.findOneAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    return res.json(monthlyquote);
  },
  //Listar cotação mensal
  async list(req, res) {
    const monthlyquote = await MonthlyQuote.find({});
    return res.json(monthlyquote);
  }
};
