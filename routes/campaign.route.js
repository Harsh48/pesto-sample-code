const express = require('express');
const router = express.Router();
const campaignController = require('../controllers/campaign.controller')

router.post('/api/create/campaigns',campaignController.createCampaign)

router.get('/api/campaigns',campaignController.getAllCampaign)

router.get('/api/campaigns/:id', campaignController.getCampaignById)

module.exports = router