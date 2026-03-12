import React from 'react';
import './RestaurantRecommendations.css';
import { assets } from '../../assets/assets';

// Mock data representing AI-curated recommendations
const aiRecommendations = [
  {
    id: 'rec1',
    name: 'Green Leaf Sushi',
    image: assets.Green_Leaf_Sushi,
    rating: 4.8,
    time: '20-30 min',
    tags: ['Sushi', 'Japanese', 'Healthy'],
    aiBadge: 'Top Match',
    description: 'Perfect for your high-protein, low-carb preferences.'
  },
  {
    id: 'rec2',
    name: 'Spicy Dragon Bowl',
    image: assets.Spicy_Dragon_Bowl,
    rating: 4.5,
    time: '15-25 min',
    tags: ['Asian', 'Spicy', 'Vegan Options'],
    aiBadge: 'Trending Now',
    description: 'Highly ordered in your area right now.'
  },
  {
    id: 'rec3',
    name: 'The Artisan Crust',
    image: assets.The_Artisan_Crust,
    rating: 4.9,
    time: '35-45 min',
    tags: ['Pizza', 'Italian', 'Comfort Food'],
    aiBadge: 'New Discovery',
    description: 'Based on your love for authentic Italian.'
  },
  {
    id: 'rec4',
    name: 'Zenith Roasters & Cafe',
    image: assets.Zenith_Roasters_Cafe,
    rating: 4.7,
    time: '10-20 min',
    tags: ['Breakfast', 'Coffee', 'Pastries'],
    aiBadge: 'Morning Ritual',
    description: 'Your usual breakfast timing is approaching.'
  }
];

const RestaurantRecommendations = () => {
  return (
    <div className="recommendations-container" id="recommendations">
      <div className="recommendations-header">
        <div className="header-title">
          <h2>Curated For You</h2>
          <span className="ai-tag-pulse">AI Powered</span>
        </div>
        <p>Personalized suggestions based on your taste profile and habits</p>
      </div>

      <div className="recommendations-grid">
        {aiRecommendations.map((rec) => (
          <div key={rec.id} className="restaurant-card">
            <div className="card-image-container">
              <img src={rec.image} alt={rec.name} className="restaurant-image" />
              <div className="badge-overlay">
                <span className="ai-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
                  {rec.aiBadge}
                </span>
                <span className="time-badge">{rec.time}</span>
              </div>
            </div>

            <div className="card-content">
              <div className="card-title-row">
                <h3>{rec.name}</h3>
                <div className="rating">
                  <span className="star">★</span>
                  <span>{rec.rating}</span>
                </div>
              </div>

              <div className="tags-container">
                {rec.tags.map((tag, index) => (
                  <span key={index} className="food-tag">{tag}</span>
                ))}
              </div>

              <p className="ai-reasoning">
                <span className="reasoning-dot"></span>
                {rec.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="explore-more-container">
        <hr className="faded-hr" />
      </div>
    </div>
  );
};

export default RestaurantRecommendations;
