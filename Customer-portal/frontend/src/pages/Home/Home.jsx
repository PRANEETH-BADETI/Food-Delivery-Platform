import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import SemanticSearchBar from '../../components/SemanticSearchBar/SemanticSearchBar';
import RestaurantRecommendations from '../../components/RestaurantRecommendations/RestaurantRecommendations';
import './Home.css';

const Home = () => {
  const [category, setCategory] = useState("all");

  return (
    <div className="home-container">
      <Header />
      <div className="ai-discovery-section">
        <SemanticSearchBar />
        <RestaurantRecommendations />
      </div>
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;