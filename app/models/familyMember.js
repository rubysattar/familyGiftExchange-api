const mongoose = require('mongoose')

const familyMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gifts: [
    {
      title: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      },
      comment: {
        type: String,
        require: false
      },
      purchased: {
        type: Boolean,
        default: false
      }
    }
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('FamilyMember', familyMemberSchema)
