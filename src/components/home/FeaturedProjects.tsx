import { MapPin, Home } from 'lucide-react';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Walnut Park Apartments',
      type: 'Apartment',
      location: 'Thailand, Bangkok',
      image: 'images/property2.jpeg',
      properties: 12
    },
    {
      id: 2,
      title: 'Sunshine Villas',
      type: 'Villa',
      location: 'Bankkok, sathon',
      image: 'images/property4.jpeg',
      properties: 8
    },
    {
      id: 3,
      title: 'Diamond Island',
      type: 'Condo',
      location: 'Sukhumit, Thailand',
      image: 'images/property11.jpeg',
      properties: 15
    },
    {
      id: 4,
      title: 'Merry Villas',
      type: 'Villa',
      location: 'Ashoke, Thailand',
      image: 'images/property13.jpeg',
      properties: 6
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600">
            We make the best choices with the hottest and most prestigious projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                </div>
              </div>
              <div className="p-5 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                  {project.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin size={16} className="mr-2" />
                  <span className="text-sm">{project.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Home size={16} className="mr-2" />
                  <span className="text-sm">{project.properties} Properties</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
