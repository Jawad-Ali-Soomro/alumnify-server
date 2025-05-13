const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Job title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Job description is required'],
    trim: true
  },
  companyLogo: {
    type: String
  },
  recruiter: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Recruiter reference is required']
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true
  },
  remote: {
    type: String,
    enum: ['remote', 'hybrid', 'on-site'],
    default: 'on-site'
  },
  salary: {
    min: {
      type: Number,
      min: 0
    },
    max: {
      type: Number,
      min: 0
    },
    currency: {
      type: String,
      default: 'USD',
      uppercase: true,
      trim: true
    },
    period: {
      type: String,
      enum: ['hourly', 'weekly', 'monthly', 'annually'],
      default: 'annually'
    }
  },
  employmentType: {
    type: String,
    enum: ['full-time', 'part-time', 'contract', 'temporary', 'internship'],
    default: 'full-time'
  },
  skillsRequired: [{
    type: String,
    trim: true
  }],
  experienceLevel: {
    type: String,
    enum: ['entry', 'mid', 'senior', 'lead', 'executive'],
    default: 'mid'
  },
  educationLevel: {
    type: String,
    enum: ['high-school', 'associate', 'bachelor', 'master', 'phd', 'none'],
    default: 'bachelor'
  },
  applicants: [{
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    appliedAt: {
      type: Date,
      default: Date.now
    },
    status: {
      type: String,
      enum: ['applied', 'reviewed', 'interviewed', 'rejected', 'hired'],
      default: 'applied'
    }
  }],
  status: {
    type: String,
    enum: ['active', 'paused', 'closed', 'draft'],
    default: 'draft'
  },
  postedAt: {
    type: Date,
    default: Date.now
  },
  expiresAt: {
    type: Date,
    default: () => Date.now() + 30*24*60*60*1000
  },
  views: {
    type: Number,
    default: 0
  },
  applicationsCount: {
    type: Number,
    default: 0
  },
  benefits: [{
    type: String,
    trim: true
  }],
  tags: [{
    type: String,
    trim: true
  }],
  requirements: {
    type: [String],
    default: []
  },
  responsibilities: {
    type: [String],
    default: []
  }
}, {
  timestamps: true,
});

jobSchema.index({ title: 'text', description: 'text', tags: 'text' });
jobSchema.index({ company: 1 });
jobSchema.index({ status: 1 });
jobSchema.index({ expiresAt: 1 });
;

jobSchema.pre('save', function(next) {
  if (this.isModified('applicants')) {
    this.applicationsCount = this.applicants.length;
  }
  next();
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;