import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  location: { 
    type: { type: String, enum: ['Point'], default: 'Point' }, 
    coordinates: { type: [Number], index: '2dsphere' }
  },
  cuisineTypes: [{ type: String }],
  rating: { type: Number, default: 0 },
  imageUrl: { type: String },
  isOpen: { type: Boolean, default: true }
});

const restaurantModel = mongoose.models.restaurant || mongoose.model("restaurant", restaurantSchema);

export default restaurantModel;
