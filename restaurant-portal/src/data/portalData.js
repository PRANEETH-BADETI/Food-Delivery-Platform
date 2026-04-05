import { FiActivity, FiClock, FiShoppingBag, FiTruck } from 'react-icons/fi'

export const stepFields = {
  1: ['ownerName', 'restaurantName', 'location', 'ownerEmail', 'contactNumber', 'workingDays', 'openingTime', 'closingTime'],
  2: ['pan', 'gst', 'bankIfsc', 'bankAccount', 'fssaiFile'],
  3: ['foodType', 'cuisines', 'menuUpload'],
}

export const initialForm = {
  email: '',
  ownerName: '',
  restaurantName: '',
  location: '',
  ownerEmail: '',
  contactNumber: '',
  workingDays: '',
  openingTime: '',
  closingTime: '',
  pan: '',
  gst: '',
  bankIfsc: '',
  bankAccount: '',
  fssaiFile: '',
  foodType: 'Pure veg',
  cuisines: '',
  menuUpload: '',
}

export const registrationSteps = [
  {
    id: 1,
    title: 'Restaurant information',
    description: 'Basic owner, contact, and operating schedule details.',
  },
  {
    id: 2,
    title: 'Restaurant documents',
    description: 'Compliance, banking, and certification details.',
  },
  {
    id: 3,
    title: 'Menu setup',
    description: 'Cuisine tags, food type, and starter menu upload.',
  },
]

export const activeOrders = [
  { id: '#TR-1024', customer: 'Ananya', items: 'Paneer Tikka Bowl x2', eta: '11 min', status: 'Cooking', amount: 'Rs 540' },
  { id: '#TR-1025', customer: 'Rahul', items: 'Veg Biryani Combo', eta: '18 min', status: 'Driver assigned', amount: 'Rs 320' },
  { id: '#TR-1026', customer: 'Isha', items: 'Masala Pasta + Garlic Bread', eta: '8 min', status: 'Ready for pickup', amount: 'Rs 410' },
  { id: '#TR-1027', customer: 'Karan', items: 'Family Meal Box', eta: '23 min', status: 'Preparing', amount: 'Rs 890' },
]

export const driverFleet = [
  { name: 'Priya S.', zone: 'Koramangala', state: 'Available', trips: 5 },
  { name: 'Mohit K.', zone: 'BTM Layout', state: 'Delivering', trips: 3 },
  { name: 'Aman R.', zone: 'HSR Layout', state: 'Available', trips: 6 },
  { name: 'Ritika P.', zone: 'Indiranagar', state: 'Break', trips: 2 },
]

export const menuHighlights = [
  { item: 'Smoked Paneer Bowl', stock: '24 bowls left', price: 'Rs 289', tag: 'Best seller' },
  { item: 'Millet Khichdi Combo', stock: 'Low stock', price: 'Rs 240', tag: 'Restock soon' },
  { item: 'Truffle Masala Pasta', stock: 'Available', price: 'Rs 330', tag: 'New dish' },
  { item: 'Cold Coffee Jar', stock: '18 units left', price: 'Rs 160', tag: 'Fast moving' },
]

export const overviewStats = [
  { label: 'Active orders', value: '28', detail: '+6 from last hour', icon: FiShoppingBag },
  { label: 'Drivers nearby', value: '12', detail: '8 available right now', icon: FiTruck },
  { label: 'Avg prep time', value: '14m', detail: '2m faster than today morning', icon: FiClock },
  { label: 'System health', value: '99.2%', detail: 'POS, payments and dispatch healthy', icon: FiActivity },
]
