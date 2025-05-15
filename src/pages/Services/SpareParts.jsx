import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Search, Filter, Car, DollarSign, MapPin, Star, Phone, ExternalLink, ChevronDown } from 'lucide-react';

const SpareParts = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    make: '',
    model: '',
    year: '',
    category: '',
    condition: '',
    priceRange: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  const parts = [
    {
      id: 1,
      name: "Brake Pads Set",
      make: "Toyota",
      model: "Camry",
      yearRange: "2018-2023",
      condition: "New",
      price: 89.99,
      rating: 4.5,
      reviews: 128,
      image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      supplier: {
        name: "AutoParts Plus",
        location: "Downtown Auto District",
        phone: "+1 (234) 567-8901",
        rating: 4.8
      }
    },
    {
      id: 2,
      name: "Air Filter",
      make: "Honda",
      model: "Civic",
      yearRange: "2016-2023",
      condition: "New",
      price: 29.99,
      rating: 4.7,
      reviews: 95,
      image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      supplier: {
        name: "Parts World",
        location: "West Side Auto Mall",
        phone: "+1 (234) 567-8902",
        rating: 4.6
      }
    },
    {
      id: 3,
      name: "Alternator",
      make: "BMW",
      model: "3 Series",
      yearRange: "2015-2022",
      condition: "Refurbished",
      price: 299.99,
      rating: 4.3,
      reviews: 67,
      image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      supplier: {
        name: "Premium Auto Parts",
        location: "East End Auto Zone",
        phone: "+1 (234) 567-8903",
        rating: 4.9
      }
    }
  ];

  const handleFilterChange = (filterName, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const FilterSection = () => (
    <div className={`${showFilters ? 'block' : 'hidden'} md:block space-y-6`}>
      <div>
        <h3 className="font-semibold mb-2">Car Make</h3>
        <select
          value={selectedFilters.make}
          onChange={(e) => handleFilterChange('make', e.target.value)}
          className={`w-full px-3 py-2 rounded-lg border ${
            isDarkMode 
              ? 'bg-gray-700 border-gray-600 text-white' 
              : 'bg-white border-gray-300'
          }`}
        >
          <option value="">All Makes</option>
          <option value="toyota">Toyota</option>
          <option value="honda">Honda</option>
          <option value="bmw">BMW</option>
        </select>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Car Model</h3>
        <select
          value={selectedFilters.model}
          onChange={(e) => handleFilterChange('model', e.target.value)}
          className={`w-full px-3 py-2 rounded-lg border ${
            isDarkMode 
              ? 'bg-gray-700 border-gray-600 text-white' 
              : 'bg-white border-gray-300'
          }`}
        >
          <option value="">All Models</option>
          <option value="camry">Camry</option>
          <option value="civic">Civic</option>
          <option value="3-series">3 Series</option>
        </select>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Year</h3>
        <select
          value={selectedFilters.year}
          onChange={(e) => handleFilterChange('year', e.target.value)}
          className={`w-full px-3 py-2 rounded-lg border ${
            isDarkMode 
              ? 'bg-gray-700 border-gray-600 text-white' 
              : 'bg-white border-gray-300'
          }`}
        >
          <option value="">All Years</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Category</h3>
        <select
          value={selectedFilters.category}
          onChange={(e) => handleFilterChange('category', e.target.value)}
          className={`w-full px-3 py-2 rounded-lg border ${
            isDarkMode 
              ? 'bg-gray-700 border-gray-600 text-white' 
              : 'bg-white border-gray-300'
          }`}
        >
          <option value="">All Categories</option>
          <option value="brakes">Brakes</option>
          <option value="engine">Engine</option>
          <option value="suspension">Suspension</option>
          <option value="electrical">Electrical</option>
        </select>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Condition</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="condition"
              value="new"
              checked={selectedFilters.condition === 'new'}
              onChange={(e) => handleFilterChange('condition', e.target.value)}
              className="mr-2"
            />
            New
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="condition"
              value="used"
              checked={selectedFilters.condition === 'used'}
              onChange={(e) => handleFilterChange('condition', e.target.value)}
              className="mr-2"
            />
            Used
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="condition"
              value="refurbished"
              checked={selectedFilters.condition === 'refurbished'}
              onChange={(e) => handleFilterChange('condition', e.target.value)}
              className="mr-2"
            />
            Refurbished
          </label>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Price Range</h3>
        <select
          value={selectedFilters.priceRange}
          onChange={(e) => handleFilterChange('priceRange', e.target.value)}
          className={`w-full px-3 py-2 rounded-lg border ${
            isDarkMode 
              ? 'bg-gray-700 border-gray-600 text-white' 
              : 'bg-white border-gray-300'
          }`}
        >
          <option value="">All Prices</option>
          <option value="0-50">$0 - $50</option>
          <option value="51-100">$51 - $100</option>
          <option value="101-200">$101 - $200</option>
          <option value="201-500">$201 - $500</option>
          <option value="501+">$501+</option>
        </select>
      </div>

      <button
        onClick={() => setSelectedFilters({
          make: '',
          model: '',
          year: '',
          category: '',
          condition: '',
          priceRange: ''
        })}
        className="w-full py-2 px-4 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors duration-200"
      >
        Clear All Filters
      </button>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className={`rounded-xl shadow-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-center justify-between md:hidden mb-4">
              <h2 className="font-semibold">Filters</h2>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="text-blue-600"
              >
                <Filter size={20} />
              </button>
            </div>
            <FilterSection />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow">
          {/* Search Bar */}
          <div className={`rounded-xl shadow-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} mb-6`}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for parts by name, make, or model..."
                className={`w-full pl-10 pr-3 py-2 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300'
                } focus:ring-2 focus:ring-blue-500`}
              />
            </div>
          </div>

          {/* Parts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parts.map(part => (
              <div 
                key={part.id}
                className={`rounded-xl shadow-lg overflow-hidden ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <img
                  src={part.image}
                  alt={part.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">{part.name}</h3>
                    <div className="flex items-center mt-1">
                      <Star className="text-yellow-400 fill-yellow-400" size={16} />
                      <span className="ml-1">{part.rating}</span>
                      <span className="text-gray-500 dark:text-gray-400 ml-1">
                        ({part.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Car size={16} className="text-gray-400 mr-2" />
                      <span>{part.make} {part.model} ({part.yearRange})</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <DollarSign size={16} className="text-gray-400 mr-2" />
                      <span className="font-semibold text-lg">${part.price}</span>
                    </div>
                  </div>

                  <div className={`p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{part.supplier.name}</h4>
                      <div className="flex items-center">
                        <Star className="text-yellow-400 fill-yellow-400" size={14} />
                        <span className="ml-1 text-sm">{part.supplier.rating}</span>
                      </div>
                    </div>
                    <div className="text-sm space-y-1">
                      <div className="flex items-center">
                        <MapPin size={14} className="text-gray-400 mr-2" />
                        <span>{part.supplier.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone size={14} className="text-gray-400 mr-2" />
                        <span>{part.supplier.phone}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Contact Supplier
                    </button>
                    <button className="py-2 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpareParts;