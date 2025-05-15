import React, { useState, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import {
  Search,
  Filter,
  Car,
  DollarSign,
  MapPin,
  Calendar,
  Users,
  Fuel,
  Activity,
  Plus,
  ChevronDown,
  Phone,
} from "lucide-react";

const UsedCars = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    make: "",
    model: "",
    year: "",
    price: "",
    mileage: "",
    bodyType: "",
    transmission: "",
    fuelType: "",
  });

  const cars = [
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
      year: 2020,
      price: 22500,
      mileage: 35000,
      location: "Downtown Auto District",
      image:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "Automatic Transmission",
        "Leather Seats",
        "Backup Camera",
        "Bluetooth",
      ],
      specs: {
        bodyType: "Sedan",
        transmission: "Automatic",
        fuelType: "Gasoline",
        engine: "2.5L 4-Cylinder",
      },
      seller: {
        name: "John's Auto Sales",
        rating: 4.8,
        phone: "+1 (234) 567-8901",
      },
    },
    {
      id: 2,
      make: "Honda",
      model: "CR-V",
      year: 2019,
      price: 24900,
      mileage: 42000,
      location: "West Side Auto Mall",
      image:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "All-Wheel Drive",
        "Sunroof",
        "Apple CarPlay",
        "Lane Departure Warning",
      ],
      specs: {
        bodyType: "SUV",
        transmission: "Automatic",
        fuelType: "Gasoline",
        engine: "1.5L Turbo",
      },
      seller: {
        name: "Premium Auto Deals",
        rating: 4.6,
        phone: "+1 (234) 567-8902",
      },
    },
    {
      id: 3,
      make: "Tesla",
      model: "Model 3",
      year: 2021,
      price: 41900,
      mileage: 28000,
      location: "East End Auto Zone",
      image:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "Autopilot",
        "Premium Interior",
        "Glass Roof",
        "Premium Sound",
      ],
      specs: {
        bodyType: "Sedan",
        transmission: "Electric",
        fuelType: "Electric",
        engine: "Dual Motor",
      },
      seller: {
        name: "Future Motors",
        rating: 4.9,
        phone: "+1 (234) 567-8903",
      },
    },
  ];

  const handleFilterChange = (filterName, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };

  const FilterSection = () => (
    <div className={`${showFilters ? "block" : "hidden"} md:block space-y-6`}>
      <div>
        <h3 className="font-semibold mb-2">Make</h3>
        <select
          value={selectedFilters.make}
          onChange={(e) => handleFilterChange("make", e.target.value)}
          className={`w-full px-3 py-2 rounded-lg border ${
            isDarkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-300"
          }`}
        >
          <option value="">All Makes</option>
          <option value="toyota">Toyota</option>
          <option value="honda">Honda</option>
          <option value="tesla">Tesla</option>
        </select>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Model</h3>
        <select
          value={selectedFilters.model}
          onChange={(e) => handleFilterChange("model", e.target.value)}
          className={`w-full px-3 py-2 rounded-lg border ${
            isDarkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-300"
          }`}
        >
          <option value="">All Models</option>
          <option value="camry">Camry</option>
          <option value="cr-v">CR-V</option>
          <option value="model-3">Model 3</option>
        </select>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Year</h3>
        <div className="grid grid-cols-2 gap-2">
          <select
            value={selectedFilters.yearFrom}
            onChange={(e) => handleFilterChange("yearFrom", e.target.value)}
            className={`w-full px-3 py-2 rounded-lg border ${
              isDarkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-300"
            }`}
          >
            <option value="">From</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
          <select
            value={selectedFilters.yearTo}
            onChange={(e) => handleFilterChange("yearTo", e.target.value)}
            className={`w-full px-3 py-2 rounded-lg border ${
              isDarkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-300"
            }`}
          >
            <option value="">To</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Price Range</h3>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            placeholder="Min"
            value={selectedFilters.priceMin}
            onChange={(e) => handleFilterChange("priceMin", e.target.value)}
            className={`w-full px-3 py-2 rounded-lg border ${
              isDarkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-300"
            }`}
          />
          <input
            type="number"
            placeholder="Max"
            value={selectedFilters.priceMax}
            onChange={(e) => handleFilterChange("priceMax", e.target.value)}
            className={`w-full px-3 py-2 rounded-lg border ${
              isDarkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-300"
            }`}
          />
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Body Type</h3>
        <select
          value={selectedFilters.bodyType}
          onChange={(e) => handleFilterChange("bodyType", e.target.value)}
          className={`w-full px-3 py-2 rounded-lg border ${
            isDarkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-300"
          }`}
        >
          <option value="">All Types</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="coupe">Coupe</option>
          <option value="truck">Truck</option>
        </select>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Transmission</h3>
        <select
          value={selectedFilters.transmission}
          onChange={(e) => handleFilterChange("transmission", e.target.value)}
          className={`w-full px-3 py-2 rounded-lg border ${
            isDarkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-300"
          }`}
        >
          <option value="">All Transmissions</option>
          <option value="automatic">Automatic</option>
          <option value="manual">Manual</option>
          <option value="electric">Electric</option>
        </select>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Fuel Type</h3>
        <select
          value={selectedFilters.fuelType}
          onChange={(e) => handleFilterChange("fuelType", e.target.value)}
          className={`w-full px-3 py-2 rounded-lg border ${
            isDarkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-300"
          }`}
        >
          <option value="">All Fuel Types</option>
          <option value="gasoline">Gasoline</option>
          <option value="diesel">Diesel</option>
          <option value="electric">Electric</option>
          <option value="hybrid">Hybrid</option>
        </select>
      </div>

      <button
        onClick={() =>
          setSelectedFilters({
            make: "",
            model: "",
            year: "",
            price: "",
            mileage: "",
            bodyType: "",
            transmission: "",
            fuelType: "",
          })
        }
        className="w-full py-2 px-4 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors duration-200"
      >
        Clear All Filters
      </button>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Used Cars</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
          <Plus size={20} />
          <span>List Your Car</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div
            className={`rounded-xl shadow-lg p-6 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
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
          <div
            className={`rounded-xl shadow-lg p-6 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } mb-6`}
          >
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by make, model, or features..."
                className={`w-full pl-10 pr-3 py-2 rounded-lg border ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300"
                } focus:ring-2 focus:ring-blue-500`}
              />
            </div>
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {cars.map((car) => (
              <div
                key={car.id}
                className={`rounded-xl shadow-lg overflow-hidden ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="relative">
                  <img
                    src={car.image}
                    alt={`${car.year} ${car.make} ${car.model}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    Featured
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">
                        {car.year} {car.make} {car.model}
                      </h3>
                      <p className="text-xl font-bold text-blue-600">
                        ${car.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center mt-2">
                      <MapPin size={16} className="text-gray-400 mr-1" />
                      <span className="text-sm">{car.location}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="text-gray-400 mr-2" />
                      <span className="text-sm">{car.year}</span>
                    </div>
                    <div className="flex items-center">
                      <Activity size={16} className="text-gray-400 mr-2" />
                      <span className="text-sm">
                        {car.mileage.toLocaleString()} mi
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Car size={16} className="text-gray-400 mr-2" />
                      <span className="text-sm">{car.specs.transmission}</span>
                    </div>
                    <div className="flex items-center">
                      <Fuel size={16} className="text-gray-400 mr-2" />
                      <span className="text-sm">{car.specs.fuelType}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {car.features.map((feature, index) => (
                        <div
                          key={index}
                          className={`text-sm px-2 py-1 rounded-full text-center ${
                            isDarkMode ? "bg-gray-700" : "bg-gray-100"
                          }`}
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`p-4 rounded-lg ${
                      isDarkMode ? "bg-gray-700" : "bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-medium">{car.seller.name}</p>
                        <div className="flex items-center mt-1">
                          <span className="text-sm mr-1">Rating:</span>
                          <span className="text-sm font-medium">
                            {car.seller.rating}/5.0
                          </span>
                        </div>
                      </div>
                      <button className="flex items-center gap-1 text-blue-600">
                        <Phone size={16} />
                        <span className="text-sm">{car.seller.phone}</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Contact Seller
                    </button>
                    <button className="flex-1 py-2 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200">
                      Schedule Test Drive
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

export default UsedCars;
