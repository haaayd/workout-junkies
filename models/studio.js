import mongoose from 'mongoose'

const Schema = mongoose.Schema

const studioSchema = new mongoose.Schema({
  name: String,
  location: String,
  parking: {
    type: Boolean,
    default: false, 
  },
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},

}, {
  timestamps: true
})

const Studio = mongoose.model('Studio', studioSchema)

export {
  Studio 
}