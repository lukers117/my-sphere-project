"use client";

import SphereImageGrid, { ImageData }  from "@/components/ui/img-sphere";
import React, { useState, useEffect } from 'react';

// ==========================================
// EASY CONFIGURATION - Edit these values to customize the component
// ==========================================

// Image data using project assets - duplicated to fill sphere better
const BASE_IMAGES: Omit<ImageData, 'id'>[] = [
  {
    src: "https://i.imgur.com/ESVSzgq.jpeg",
     alt: "FILAMINGO Album Cover",
  title: "FILAMINGO - 2025",
  description: "FILAMINGO is the 3rd studio album by Luke Makes Music.",
  link: "https://www.lukemakesmusic.com/filamingo",
  linkText: "Stream Green",
  },
  {
    src: "https://i.imgur.com/LMSTfI9.png",
    alt: "SKINTIGHT Album Cover",
    title: "SKINTIGHT - 2022",
    description: "SKINTIGHT is the 2nd studio album by Luke Makes Music.",
     link: "https://music.apple.com/us/album/skintight/1662762866",
  linkText: "Listen Now",
  },
  {
    src: "https://i.imgur.com/zWyyT3k.jpeg",
    alt: "Positive Intent Book",
    title: "Positive Intent - 2024",
    description: "Positive Intent is a modern paperback book written by Luke Stene.",
      link: "https://www.amazon.com/Positive-Intent-Anybiography-Luke-Stene/dp/B0D9731YMN#averageCustomerReviewsAnchor",
  linkText: "Buy Now",
  },
  {
    src: "https://i.imgur.com/thFszy3.jpeg",
    alt: "POLYESTER Album Cover",
    title: "POLYESTER - 2021",
    description: "POLYESTER is the 1st studio album by Luke Makes Music.",
      link: "https://music.apple.com/us/album/polyester/1577563192",
  linkText: "Listen Now",
  },
   {
    src: "https://i.imgur.com/VFTaG8k.jpeg",
    alt: "Luke in his Recording Studio",
    title: "Luke's Recording Studio - 2023",
     link: "https://www.lukemakesmusic.com/contact",
         description: "Luke's sits in his studio used to record FILAMINGO.",
  linkText: "Contact Luke to Mix",
    
  },
   {
    src: "https://i.imgur.com/gNN4a1q.jpeg",
    alt: "Luke in his Recording Studio",
    title: "Luke's Recording Studio - 2023",
    link: "https://www.lukemakesmusic.com/sessions",
             description: "Luke's sits in his studio used to record FILAMINGO.",
  linkText: "Work with Luke",
  },
     {
    src: "https://i.imgur.com/ABitdmE.png",
    alt: "Pastel Pink",
        title: "POLYESTER - The 1st Color by Luke Makes Music",
                     description: "1 out of 15 colors",
          link: "https://www.lukemakesmusic.com/",
  linkText: "Visit Our Website",
  },
    {
    src: "https://i.imgur.com/pbRotEm.png",
    alt: "Ultramarine Blue",
      title: "SKINTIGHT - The 2nd Color by Luke Makes Music",
                           description: "2 out of 15 colors",
        link: "https://www.lukemakesmusic.com/",
  linkText: "Visit Our Website",
  },
  {
    src: "https://i.imgur.com/N8X7x3P.png",
    alt: "Forest Green",
    title: "FILAMINGO - The 3rd Color by Luke Makes Music",
                         description: "3 out of 15 colors",
      link: "https://www.lukemakesmusic.com/",
  linkText: "Visit Our Website",
  },
     {
    src: "https://i.imgur.com/VjcJcaT.jpeg",
    alt: "Luke in Green Jacket",
    title: "Luke in FILAMINGO",
      link: "https://www.lukemakesmusic.com/",
  linkText: "Visit Our Website",

  },
   {
    src: "https://i.imgur.com/3Bp6tce.jpeg",
    alt: "Luke Smiling",
    title: "Is there anything better than to create?",
                         description: "Come work with us!",
     link: "https://www.lukemakesmusic.com/",
  linkText: "Visit Our Website",

  },
  // Add more images...
];

// Generate more images by repeating the base set
const IMAGES: ImageData[] = [];
for (let i = 0; i < 60; i++) {
  const baseIndex = i % BASE_IMAGES.length;
  const baseImage = BASE_IMAGES[baseIndex];
  IMAGES.push({
    id: `img-${i + 1}`,
    ...baseImage,
    alt: `${baseImage.alt} (${Math.floor(i / BASE_IMAGES.length) + 1})`
  });
}

// Component configuration - easily adjustable
interface SphereConfig {
  containerSize: number;
  sphereRadius: number;
  dragSensitivity: number;
  momentumDecay: number;
  maxRotationSpeed: number;
  baseImageScale: number;
  hoverScale: number;
  perspective: number;
  autoRotate: boolean;
  autoRotateSpeed: number;
}

export default function DemoOne() {
  const [isMounted, setIsMounted] = useState(false);
  const [containerSize, setContainerSize] = useState(600);

  useEffect(() => {
    setIsMounted(true);
    
    // Set responsive container size
    const updateSize = () => {
      if (window.innerWidth < 640) {
        // Mobile
        setContainerSize(Math.min(window.innerWidth - 40, 400));
      } else if (window.innerWidth < 1024) {
        // Tablet
        setContainerSize(500);
      } else {
        // Desktop
        setContainerSize(600);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const CONFIG: SphereConfig = {
    containerSize: containerSize,
    sphereRadius: containerSize * 0.4,  // Scale radius with container
    dragSensitivity: 1,
    momentumDecay: 0.96,
    maxRotationSpeed: 5,
    baseImageScale: 0.25,
    hoverScale: 1.5,
    perspective: 1500,
    autoRotate: true,
    autoRotateSpeed: 0.35
  };

  if (!isMounted) {
    return (
      <main className="w-full min-h-screen flex justify-center items-center p-6">
        <div className="text-gray-400">Loading...</div>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen flex justify-center items-center p-4 md:p-6 overflow-hidden">
      <div className="flex justify-center items-center w-full">
        <SphereImageGrid
          images={IMAGES}
          {...CONFIG}
        />
      </div>
    </main>
  );
}