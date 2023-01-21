const express = require('express');
const router = express.Router();
const leadController = require('../controllers/lead.controller')

router.post('/api/create/lead',leadController.createLeads)

router.post('/api/leads',leadController.getAllLeads)

router.post('/api/leads/:id',leadController.getLeadsById)


module.exports = router