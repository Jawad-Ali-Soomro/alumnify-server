const { Job } = require("../models")

const addJob = async (req,res) => {
    const newJob = await Job.create(req.body)
    if(!newJob) {
        return res.json({
            success: false,
            message: "Error while creating job"
        })
    } else {
        return res.json({
            success: true,
            newJob
        })
    }
} 

const getAllJobs = async (req,res) => {
    const allJobs = await Job.find().populate("recruiter")
    if(!allJobs) {
        return res.json({
            success: false,
            message:  "No Jobs found  yet!"
        })
    }
    return res.json({
        success: true,
        message:  "Found!",
        jobs: allJobs
    })
}

module.exports = {
    addJob,
    getAllJobs
}