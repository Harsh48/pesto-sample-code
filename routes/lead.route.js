const express = require('express');
const router = express.Router();
const leadController = require('../controllers/lead.controller')

router.post('/api/create/lead',leadController.createLeads)

router.get('/api/leads',leadController.getAllLeads)

router.get('/api/leads/:id',leadController.getLeadsById)

router.patch('/api/leads/:id',leadController.assignLeads)


module.exports = router