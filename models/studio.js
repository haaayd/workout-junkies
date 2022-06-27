import mongoose from 'mongoose'

const studioSchema = new mongoose.Schema({
  name: String,
  location: String,
  parking: Boolean,
  // owner: {type: Schema.Types.ObjectId, ref: "Profile"}

}, {
  timestamps: true
})

const Studio = mongoose.model('Studio', studioSchema)

export {
  Studio 
}