import mongoose from 'mongoose'

const Schema = mongoose.Schema
const reviewSchema = new Schema ({
  time: Date, 
  instructor: String,
  packed: Boolean, 
  rating: {type:Number, min:1, max:5, default:3}

})
const classSchema = new Schema ({
  category: String, 
  level: {
    type: String,
    enum:["beginner", "moderate", "advance", "all levels"],
    default: "all levels",
    reviews: [reviewSchema],
  }, 
  }, { 
    timestamps: true
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