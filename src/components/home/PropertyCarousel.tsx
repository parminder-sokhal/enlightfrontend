import React, { useEffect, useRef } from 'react';

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
    <div className="container px-32 mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-2">
  {videoSources.map((src, index) => (
    <div key={index} className="rounded overflow-hidden shadow-md bg-white">
      <div className="aspect-w-9 aspect-h-16"> {/* Taller layout */}
        <video
          ref={(el) => {
            if (el) videoRefs.current[index] = el;
          }}
          src={src}
          
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover lazyload"
        
        />
      </div>
      <div className="p-2 text-center font-semibold text-sm">Property - {index + 1}</div>
    </div>
  ))}
</div>

  );
};

export default PropertyCarousel;
