import React from 'react';
import './Restaurants.css';
import { assets } from '../../assets/assets';

const Restaurants = () => {
  // Mock data for multiple restaurants
  const restaurantList = [
    {
      id: 1,
      name: "Green Leaf Sushi",
      image: assets.Green_Leaf_Sushi,
      rating: 4.8,
      deliveryTime: "20-30 min",
      popularItems: ["Salmon Avocado Roll", "Spicy Tuna Crunch"]
    },
    {
      id: 2,
      name: "The Artisan Crust",
      image: assets.The_Artisan_Crust,
      rating: 4.6,
      deliveryTime: "35-45 min",
      popularItems: ["Truffle Mushroom Pizza", "Garlic Knots"]
    },
    {
      id: 3,
      name: "Spicy Dragon Bowl",
      image: assets.Spicy_Dragon_Bowl,
      rating: 4.5,
      deliveryTime: "15-25 min",
      popularItems: ["Kung Pao Chicken", "Veggie Hakka Noodles"]
    },
    {
      id: 4,
      name: "Zenith Roasters & Cafe",
      image: assets.Zenith_Roasters_Cafe,
      rating: 4.7,
      deliveryTime: "10-20 min",
      popularItems: ["Avocado Toast", "Cold Brew"]
    }
  ];

  const handleRestaurantClick = (id) => {
    // Later, you will use React Router here: navigate(`/restaurant/${id}`)
    console.log(`Navigating to restaurant ID: ${id}`);
    alert("This will navigate to the detailed menu page!");
  };

  return (
    <div className="restaurants-listing">
      <div className="listing-header">
        <h2>Top Restaurants Near You</h2>
        <p>Explore the best food spots based on your location and simulated AI delivery routes.</p>
      </div>

      <div className="restaurants-grid">
        {restaurantList.map((restaurant) => (
          <div 
            key={restaurant.id} 
            className="rest-card" 
            onClick={() => handleRestaurantClick(restaurant.id)}
          >
            <div className="rest-card-image">
              <img src={restaurant.image} alt={restaurant.name} />
              <div className="time-overlay">{restaurant.deliveryTime}</div>
            </div>
            
            <div className="rest-card-info">
              <div className="rest-card-title-row">
                <h3>{restaurant.name}</h3>
                <div className="rest-rating">
                  <span className="star">★</span> {restaurant.rating}
                </div>
              </div>
              
              <div className="popular-items-section">
                <span className="popular-label">Popular:</span>
                <p className="popular-items-text">
                  {restaurant.popularItems.join(', ')}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;