import mongoose from 'mongoose'

const Schema = mongoose.Schema

const memberSchema = new Schema({
  name: String,
  avatar: String,
}, {
  timestamps: true
})

const Member = mongoose.model('Member', memberSchema)

export {
  Member
}
