const express = require('express');
const router = express.Router();
const leadController = require('../controllers/lead.controller')

router.post('/api/create/leads',leadController.createLeads)

router.get('/api/leads/:campaignId',leadController.getAllLeads)

router.get('/api/leads/company/:companyId',leadController.getAllLeadsByCompany)

router.get('/api/:userId/leads',leadController.getAllLeadsBySales)

router.get('/api/:userId/leads/success',leadController.getAllSucessLeads)

router.get('/api/:userId/leads/failed',leadController.getAllFailedLeads)

router.get('/api/:userId/leads/rescheduled',leadController.getAllRescheduledLeads)

router.get('/api/leads/:id',leadController.getLeadsById)

router.patch('/api/leads/:id',leadController.assignLeads)




module.exports = router