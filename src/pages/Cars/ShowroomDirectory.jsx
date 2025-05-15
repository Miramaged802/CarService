import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Search, MapPin, Phone, Clock, Car, Star, Calendar, ExternalLink } from 'lucide-react';

const ShowroomDirectory = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const showrooms = [
    {
      id: 1,
      name: "Premium Auto Gallery",
      brands: ["BMW", "Mercedes", "Audi"],
      location: "Downtown Auto District",
      address: "123 Luxury Lane, Auto City, CA 90210",
      phone: "+1 (234) 567-8901",
      rating: 4.8,
      reviews: 156,
      hours: {
        weekday: "9:00 AM - 8:00 PM",
        saturday: "10:00 AM - 6:00 PM",
        sunday: "Closed"
      },
      image: "https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Test Drive Available",
        "Virtual Tour",
        "Trade-In Welcome",
        "Financing Available"
      ]
    },
    {
      id: 2,
      name: "EcoTech Motors",
      brands: ["Tesla", "Rivian", "Lucid"],
      location: "West Side Auto Mall",
      address: "456 Electric Avenue, Auto City, CA 90211",
      phone: "+1 (234) 567-8902",
      rating: 4.9,
      reviews: 98,
      hours: {
        weekday: "10:00 AM - 7:00 PM",
        saturday: "10:00 AM - 5:00 PM",
        sunday: "11:00 AM - 4:00 PM"
      },
      image: "https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "EV Charging Station",
        "Interactive Displays",
        "Test Drive Available",
        "Home Delivery"
      ]
    },
    {
      id: 3,
      name: "Family Auto Center",
      brands: ["Toyota", "Honda", "Hyundai"],
      location: "East End Auto Zone",
      address: "789 Family Drive, Auto City, CA 90212",
      phone: "+1 (234) 567-8903",
      rating: 4.7,
      reviews: 224,
      hours: {
        weekday: "9:00 AM - 9:00 PM",
        saturday: "9:00 AM - 7:00 PM",
        sunday: "10:00 AM - 6:00 PM"
      },
      image: "https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Family Friendly",
        "Service Center",
        "Test Drive Available",
        "Extended Warranty"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Search and Filters */}
      <div className={`rounded-xl shadow-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} mb-8`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search showrooms..."
              className={`w-full pl-10 pr-3 py-2 rounded-lg border ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300'
              } focus:ring-2 focus:ring-blue-500`}
            />
          </div>

          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className={`px-3 py-2 rounded-lg border ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300'
            } focus:ring-2 focus:ring-blue-500`}
          >
            <option value="">All Brands</option>
            <option value="bmw">BMW</option>
            <option value="mercedes">Mercedes</option>
            <option value="tesla">Tesla</option>
            <option value="toyota">Toyota</option>
          </select>

          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className={`px-3 py-2 rounded-lg border ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300'
            } focus:ring-2 focus:ring-blue-500`}
          >
            <option value="">All Locations</option>
            <option value="downtown">Downtown Auto District</option>
            <option value="westside">West Side Auto Mall</option>
            <option value="eastend">East End Auto Zone</option>
          </select>
        </div>
      </div>

      {/* Showrooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {showrooms.map(showroom => (
          <div 
            key={showroom.id}
            className={`rounded-xl shadow-lg overflow-hidden ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <img
              src={showroom.image}
              alt={showroom.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{showroom.name}</h3>
                  <div className="flex items-center">
                    <Star className="text-yellow-400 fill-yellow-400" size={16} />
                    <span className="ml-1">{showroom.rating}</span>
                    <span className="text-gray-500 dark:text-gray-400 ml-1">
                      ({showroom.reviews})
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {showroom.brands.map((brand, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 rounded-full text-sm ${
                        isDarkMode 
                          ? 'bg-gray-700' 
                          : 'bg-gray-100'
                      }`}
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin size={16} className="text-gray-400 mr-2" />
                  <span className="text-sm">{showroom.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone size={16} className="text-gray-400 mr-2" />
                  <span className="text-sm">{showroom.phone}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="text-gray-400 mr-2" />
                  <div className="text-sm">
                    <p>Mon-Fri: {showroom.hours.weekday}</p>
                    <p>Sat: {showroom.hours.saturday}</p>
                    <p>Sun: {showroom.hours.sunday}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {showroom.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-sm"
                    >
                      <Car size={14} className="text-blue-600 mr-1" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Schedule Visit
                </button>
                <button className="flex-1 py-2 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200">
                  Virtual Tour
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowroomDirectory;