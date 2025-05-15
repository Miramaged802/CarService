import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Search, Filter, Car, DollarSign, Fuel, Users, Activity, Info, Star } from 'lucide-react';

const CarInformation = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    make: '',
    model: '',
    year: '',
    priceRange: '',
    bodyType: '',
    fuelType: ''
  });

  // Mock car data
  const cars = [
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
      year: 2025,
      price: 27000,
      image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      specs: {
        engine: "2.5L 4-Cylinder",
        power: "203 hp",
        transmission: "8-speed Automatic",
        fuelType: "Gasoline",
        fuelEconomy: "28 city / 39 hwy",
        seating: 5
      },
      features: [
        "Apple CarPlay",
        "Android Auto",
        "Lane Departure Warning",
        "Adaptive Cruise Control"
      ],
      rating: 4.8,
      reviews: 128
    },
    {
      id: 2,
      make: "Honda",
      model: "CR-V",
      year: 2025,
      price: 29000,
      image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      specs: {
        engine: "1.5L Turbo",
        power: "190 hp",
        transmission: "CVT",
        fuelType: "Gasoline",
        fuelEconomy: "28 city / 34 hwy",
        seating: 5
      },
      features: [
        "Honda Sensing",
        "Wireless Charging",
        "Hands-free Power Tailgate",
        "Blind Spot Monitor"
      ],
      rating: 4.7,
      reviews: 95
    },
    {
      id: 3,
      make: "Tesla",
      model: "Model 3",
      year: 2025,
      price: 42000,
      image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      specs: {
        engine: "Dual Motor",
        power: "346 hp",
        transmission: "Single-speed",
        fuelType: "Electric",
        fuelEconomy: "134 MPGe",
        seating: 5
      },
      features: [
        "Autopilot",
        "15\" Touchscreen",
        "Glass Roof",
        "Premium Audio"
      ],
      rating: 4.9,
      reviews: 156
    }
  ];

  const handleFilterChange = (filterName, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Search and Filters */}
      <div className={`rounded-xl shadow-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} mb-8`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative col-span-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by make, model, or features..."
              className={`w-full pl-10 pr-3 py-2 rounded-lg border ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300'
              } focus:ring-2 focus:ring-blue-500`}
            />
          </div>

          <select
            value={selectedFilters.make}
            onChange={(e) => handleFilterChange('make', e.target.value)}
            className={`px-3 py-2 rounded-lg border ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300'
            } focus:ring-2 focus:ring-blue-500`}
          >
            <option value="">All Makes</option>
            <option value="toyota">Toyota</option>
            <option value="honda">Honda</option>
            <option value="tesla">Tesla</option>
          </select>

          <select
            value={selectedFilters.year}
            onChange={(e) => handleFilterChange('year', e.target.value)}
            className={`px-3 py-2 rounded-lg border ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300'
            } focus:ring-2 focus:ring-blue-500`}
          >
            <option value="">All Years</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map(car => (
          <div 
            key={car.id}
            className={`rounded-xl shadow-lg overflow-hidden ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <img
              src={car.image}
              alt={`${car.year} ${car.make} ${car.model}`}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    {car.year} {car.make} {car.model}
                  </h3>
                  <div className="flex items-center">
                    <Star className="text-yellow-400 fill-yellow-400" size={16} />
                    <span className="ml-1">{car.rating}</span>
                    <span className="text-gray-500 dark:text-gray-400 ml-1">
                      ({car.reviews})
                    </span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-blue-600 mt-2">
                  ${car.price.toLocaleString()}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Activity size={16} className="text-gray-400 mr-2" />
                  <span className="text-sm">{car.specs.power}</span>
                </div>
                <div className="flex items-center">
                  <Fuel size={16} className="text-gray-400 mr-2" />
                  <span className="text-sm">{car.specs.fuelType}</span>
                </div>
                <div className="flex items-center">
                  <Car size={16} className="text-gray-400 mr-2" />
                  <span className="text-sm">{car.specs.transmission}</span>
                </div>
                <div className="flex items-center">
                  <Users size={16} className="text-gray-400 mr-2" />
                  <span className="text-sm">{car.specs.seating} seats</span>
                </div>
              </div>

              <div className={`p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <h4 className="font-medium mb-2">Key Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {car.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-sm"
                    >
                      <Info size={14} className="text-blue-600 mr-1" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  View Details
                </button>
                <button className="flex-1 py-2 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200">
                  Compare
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarInformation;