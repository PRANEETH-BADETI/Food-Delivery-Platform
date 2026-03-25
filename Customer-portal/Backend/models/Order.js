import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  items: [{
    menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
    quantity: { type: Number, required: true },
    priceAtTimeOfOrder: { type: Number, required: true }
  }],
  totalAmount: { type: Number, required: true },
  deliveryAddress: { 
    street: String, 
    lat: Number, 
    lng: Number 
  },
  status: { 
    type: String, 
    enum: ['Pending', 'Accepted', 'Preparing', 'Out for Delivery', 'Delivered'],
    default: 'Pending'
  },
  deliveryPartnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  paymentStatus: { type: String, enum: ['Pending', 'Paid', 'Failed'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});


const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel;