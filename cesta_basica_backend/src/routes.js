const express = require("express");
const routes = express.Router();
const UsersController = require("./controllers/UserController");
const SessionsController = require("./controllers/SessionController");
const authMiddleware = require("./middlewares/auth");
const authorizationMiddleware = require("./middlewares/authorization");
const CommerceController = require("./controllers/CommerceController");
const MonthlyQuoteController = require("./controllers/MonthlyQuote");
//Buscar usuário por email
routes.get("/user/:email", UsersController.index);
//Cadastrar seção
routes.post("/session", SessionsController.store);
//Excluir usuário por ID
routes.delete("/user/:id", UsersController.destroy);
//Alterar usuário por email
routes.put("/user/:email", UsersController.uptade);
//Cadastrar usuário
routes.post("/user", UsersController.store);
//Listar usuários
routes.get("/user", UsersController.list);
//Cadastrar comércio
routes.post("/commerce", CommerceController.store);
//Listar comércios
routes.get("/commerce", CommerceController.list);
//Cadastrar cotação mensal
routes.post("/monthlyquote", MonthlyQuoteController.store);
//Listar cotações mensais
routes.get("/monthlyquote", MonthlyQuoteController.list);
//Autenticação
routes.use(authMiddleware);

routes.get("/teste", (req, res) => res.json({ ok: true }));
module.exports = routes;
