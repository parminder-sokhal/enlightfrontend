import React, { useEffect, useRef } from "react";

const videoSources = [
  "/videos/PropertyCarousel/v1.mp4",
  "/videos/PropertyCarousel/v3.mp4",
  "/videos/PropertyCarousel/v4.mp4",
  "/videos/PropertyCarousel/v5.mp4",
  "/videos/PropertyCarousel/v6.mp4",
  "/videos/PropertyCarousel/v1.mp4",
];

const PropertyCarousel: React.FC = () => {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.playbackRate = 4.0;
        video.play().catch((error) => {
          console.error("Video play failed:", error);
        });
      }
    });
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-32 py-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {videoSources.map((src, index) => (
          <div
            key={index}
            className="rounded overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-200"
          >
            {/* Maintain aspect ratio for vertical videos */}
            <div className="relative w-full pb-[177%] overflow-hidden rounded-md">
              <video
                ref={(el) => {
                  if (el) videoRefs.current[index] = el;
                }}
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-2 text-center font-semibold text-xs sm:text-sm">
              Property - {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCarousel;
