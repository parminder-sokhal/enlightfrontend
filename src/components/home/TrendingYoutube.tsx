import React, { useState } from "react";
import { FaYoutube } from "react-icons/fa";

// Define the type for each link
interface Link {
  _id: string;
  url: string;
}

// Sample list of embedded YouTube links
const links: Link[] = [
  {
    _id: "1",
    url: "https://www.youtube.com/embed/hS_149t5okc",
  },
  {
    _id: "2",
    url: "https://www.youtube.com/embed/7rTRNqiRmUU",
  },
  {
    _id: "3",
    url: "https://www.youtube.com/embed/53n1IZRzQm4",
  },
  {
    _id: "4",
    url: "https://www.youtube.com/embed/lEAvFyqAlkw",
  },
  {
    _id: "5",
    url: "https://www.youtube.com/embed/lEAvFyqAlkw",
  },
  
];

// Utility to extract thumbnail from embed URL
const getYoutubeThumbnail = (embedUrl: string): string => {
  const videoId = embedUrl.split("/embed/")[1];
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

const TrendingYoutube: React.FC = () => {
  const [activeVideos, setActiveVideos] = useState<Record<string, boolean>>({});

  const handlePlay = (id: string) => {
    setActiveVideos((prev) => ({ ...prev, [id]: true }));
  };

  if (links.length === 0) return null;

  return (
    <div className="container mx-auto lg:px-32 px-6 py-15">
      <h2 className="sm:text-4xl text-3xl text-start mb-3">
        Enlight Real Estate Video channel
      </h2>
      <span className="text-start block mb-5 text-gray-600">
        Watch featured video reviews of top Real Estate Projects!
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {links.map((video, index) => {
          const thumbnailUrl = getYoutubeThumbnail(video.url);

          return (
            <div
              key={video._id}
              className="w-full aspect-video bg-white rounded-md shadow-md overflow-hidden relative cursor-pointer"
            >
              {!activeVideos[video._id] ? (
                <div
                  onClick={() => handlePlay(video._id)}
                  className="w-full h-full relative group"
                >
                  <img
                    src={thumbnailUrl}
                    alt="YouTube video thumbnail"
                    className="w-full h-full object-cover bg-white"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 transition duration-300">
                    <FaYoutube className="text-red-600 text-6xl" />
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  loading="lazy"
                  src={`${video.url}?autoplay=1`}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingYoutube;
