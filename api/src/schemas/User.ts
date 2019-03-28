import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  fullName: String,
  email: String,
  password: String
}, {
  timestamps: true
})

export default model('User', UserSchema)
