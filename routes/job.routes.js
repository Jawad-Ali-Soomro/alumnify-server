const express = require("express")
const { addJob, getAllJobs } = require("../controllers")
const jobRoutes = express.Router()

jobRoutes.post('/', addJob)
jobRoutes.get('/all', getAllJobs)

module.exports = jobRoutes