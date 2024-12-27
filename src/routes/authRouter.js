const Router = require('express');
const { register } = require('../controllers/AuthController');

const authRouter = Router()

authRouter.post('/register',register);

module.exports = authRouter;