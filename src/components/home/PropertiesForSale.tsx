import { Bed, Bath, Maximize, Heart, MapPin } from 'lucide-react';

const PropertiesForSale = () => {
  const properties = [
    {
      id: 1,
      title: 'Luxury Villa in Manhattan',
      price: 2850000,
      location: 'New York, NY',
      type: 'Villa',
      bedrooms: 5,
      bathrooms: 4,
      area: 4500,
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Modern Apartment in Downtown',
      price: 675000,
      location: 'Los Angeles, CA',
      type: 'Apartment',
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Beachfront Condo',
      price: 1250000,
      location: 'Miami, FL',
      type: 'Condo',
      bedrooms: 3,
      bathrooms: 3,
      area: 2100,
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Suburban Family Home',
      price: 485000,
      location: 'Chicago, IL',
      type: 'House',
      bedrooms: 4,
      bathrooms: 3,
      area: 2800,
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Penthouse Suite',
      price: 3200000,
      location: 'New York, NY',
      type: 'Penthouse',
      bedrooms: 4,
      bathrooms: 4,
      area: 3500,
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'Cozy Studio Loft',
      price: 385000,
      location: 'Los Angeles, CA',
      type: 'Studio',
      bedrooms: 1,
      bathrooms: 1,
      area: 800,
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 7,
      title: 'Ranch Style Estate',
      price: 1850000,
      location: 'Houston, TX',
      type: 'House',
      bedrooms: 6,
      bathrooms: 5,
      area: 5200,
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 8,
      title: 'Contemporary Townhouse',
      price: 795000,
      location: 'Chicago, IL',
      type: 'Townhouse',
      bedrooms: 3,
      bathrooms: 2,
      area: 1850,
      image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Properties For Sale
          </h2>
          <p className="text-lg text-gray-600">
            Explore our wide range of properties available for sale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {property.type}
                  </span>
                </div>
                <button className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition">
                  <Heart size={18} className="text-gray-700" />
                </button>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition line-clamp-1">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin size={14} className="mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <div className="flex items-center justify-between text-gray-600 text-sm mb-4 pb-4 border-b">
                  <div className="flex items-center">
                    <Bed size={16} className="mr-1" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center">
                    <Bath size={16} className="mr-1" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center">
                    <Maximize size={16} className="mr-1" />
                    <span>{property.area} sqft</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    ${property.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertiesForSale;
