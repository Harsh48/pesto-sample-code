const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')

// const sharp = require('sharp')
const authMiddleware = require('../middleware/auth')


router.get('/api/users', authMiddleware, userController.getUsers)

router.get('/api/users/managers/:companyId', authMiddleware, userController.getManagersByCompany)

router.get('/api/users/sales/:companyId', authMiddleware, userController.getSalesByCompany)

router.get('/api/users/:id', authMiddleware, userController.getUserById)

router.post('/api/users', userController.createUser)

router.post('/api/register',userController.register)


router.post('/api/login',userController.login)

router.put('/api/users', userController.updateUser)

router.delete('/api/users', userController.deleteUser)

module.exports = router