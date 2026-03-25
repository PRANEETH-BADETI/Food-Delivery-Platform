import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  role: {type: String, enum: ['customer', 'deliverypartner', 'admin'], required: true, default:'customer'},
  addresses: [{
    street: String,
    city: String,
    lat: Number,
    lng: Number
  }],
  dieterydietaryPreferences : [{type: String}],
  createdAt: {type: Date, default: Date.now},
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;