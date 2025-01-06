const Router = require('express');
const { register, login, addSinhVien, loginGV, addGiangVien} = require('../controllers/AuthController');

const authRouter = Router()

authRouter.post('/register',register);
authRouter.post('/login', login);
authRouter.post('/add', addSinhVien);
authRouter.post('/loginGV', loginGV);
authRouter.post('/addGV', addGiangVien);

module.exports = authRouter;