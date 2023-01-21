const express = require('express');
const router = express.Router();
const companyController = require('../controllers/company.controller')

router.post('/api/register/company',companyController.registerCompany)

router.get('/api/companies',companyController.getAllCompany)

router.patch('/api/remove/companies/:id', companyController.removeCompany)

router.get('/api/companies/:id', companyController.getCompanyById)

module.exports = router