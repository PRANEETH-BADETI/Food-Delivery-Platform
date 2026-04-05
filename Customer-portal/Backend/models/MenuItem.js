import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  name: {type: String, required: true},
  price: {type: Number, required: true},
  category: {type: String},
  description: {type: String},
  imageUrl: {type: String},
  isAvailable: {type: Boolean, default: true},
  dietaryTags: [{ type: String }],
});

const menuItemModel = mongoose.models.menuItem || mongoose.model("menuItem", menuItemSchema);

export default menuItemModel;


