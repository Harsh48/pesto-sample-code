const express = require('express');
const router = express.Router();
const statusController = require('../controllers/leadStatus.controller')

router.post('/api/create/status/',statusController.createLeadStatus)

router.get('/api/status/:leadId',statusController.getLeadsStatusById)

router.get('/api/status/',statusController.getAllLeadsStatus)


module.exports = router