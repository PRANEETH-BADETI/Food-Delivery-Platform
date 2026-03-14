import React, { useState } from 'react';
import './LocationDrawer.css';
import { assets } from '../../assets/assets';

const LocationDrawer = ({ isOpen, onClose, currentLocation, setCurrentLocation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLocating, setIsLocating] = useState(false);

  // Mock saved addresses to make the UI feel alive
  const savedAddresses = [
    { id: 1, type: "Home", address: "Sri City, Andhra Pradesh, India", icon: "🏠" },
    { id: 2, type: "Work", address: "Tech Park, Block B", icon: "💼" }
  ];

  const handleLocateMe = () => {
    setIsLocating(true);
    // Simulating HTML5 Geolocation API delay
    setTimeout(() => {
      setCurrentLocation("Sri City, Andhra Pradesh");
      setIsLocating(false);
      onClose();
    }, 1200);
  };

  const handleSelectAddress = (address) => {
    setCurrentLocation(address);
    onClose();
  };

  return (
    <>
      {/* Dark overlay behind the drawer */}
      <div 
        className={`drawer-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      ></div>

      {/* The sliding drawer */}
      <div className={`location-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
          <h2>Select Location</h2>
        </div>

        <div className="drawer-body">
          {/* Search Input */}
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search for area, street name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Auto-detect GPS Button */}
          <div className="locate-me-btn" onClick={handleLocateMe}>
            <div className="target-icon">🎯</div>
            <div className="locate-text">
              <h3>{isLocating ? "Fetching location..." : "Get current location"}</h3>
              <p>Using GPS</p>
            </div>
          </div>

          <hr className="drawer-divider" />

          {/* Saved Addresses List */}
          <div className="saved-addresses">
            <p className="section-title">SAVED ADDRESSES</p>
            {savedAddresses.map((item) => (
              <div 
                key={item.id} 
                className="address-item"
                onClick={() => handleSelectAddress(item.address)}
              >
                <div className="address-icon">{item.icon}</div>
                <div className="address-details">
                  <h3>{item.type}</h3>
                  <p>{item.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationDrawer;