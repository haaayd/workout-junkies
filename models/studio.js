import mongoose from 'mongoose'

const Schema = mongoose.Schema

const classSchema = new Schema ({
  category: String, 
  level: {
    type: String,
    enum:["beginner", "moderate", "advance", "all levels"],
    default: "all levels"
  }
})

const studioSchema = new mongoose.Schema({
  name: String,
  location: String,
  parking: {
    type: Boolean,
    default: false, 
  },
  classes: [classSchema],
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},

}, {
  timestamps: true
})

const Studio = mongoose.model('Studio', studioSchema)

export {
  Studio 
}