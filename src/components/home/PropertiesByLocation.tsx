import { MapPin } from 'lucide-react';

const PropertiesByLocation = () => {
  const locations = [
    {
      id: 1,
      name: 'New York',
      properties: 125,
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      name: 'Los Angeles',
      properties: 98,
      image: 'https://images.pexels.com/photos/1707310/pexels-photo-1707310.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      name: 'Chicago',
      properties: 87,
      image: 'https://images.pexels.com/photos/1146642/pexels-photo-1146642.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      name: 'Miami',
      properties: 76,
      image: 'https://images.pexels.com/photos/358311/pexels-photo-358311.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      name: 'Houston',
      properties: 65,
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Properties by Locations
          </h2>
          <p className="text-lg text-gray-600">
            Each place is a good choice, it will help you make the right decision
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {locations.map((location) => (
            <div
              key={location.id}
              className="group relative cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-64"
            >
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center text-white mb-2">
                  <MapPin size={18} className="mr-2" />
                  <h3 className="text-xl font-semibold">{location.name}</h3>
                </div>
                <p className="text-white/90 text-sm">
                  {location.properties} Properties
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesByLocation;
