"use client";

import { useEffect } from 'react';
import Link from 'next/link';

export default function AdPage() {
  useEffect(() => {
    // Generate floating particles
    const container = document.querySelector('.ad-container');
    if (!container) return;

    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
      particle.style.setProperty('--ty', (Math.random() - 0.5) * 200 + 'px');
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animationDuration = (15 + Math.random() * 10) + 's';
      
      container.appendChild(particle);
    }
  }, []);

  return (
    <>
      <style jsx>{`
        .ad-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          background: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          animation: float 20s infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) scale(0);
            opacity: 0;
          }
        }
        
        .content {
          text-align: center;
          z-index: 10;
          animation: fadeInUp 1.5s ease-out;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .title {
          font-size: clamp(3rem, 12vw, 8rem);
          font-weight: 900;
          background: linear-gradient(135deg, #FFB6C1 0%, #4169E1 50%, #228B22 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
          line-height: 1;
          animation: gradientShift 3s ease infinite;
          background-size: 200% 200%;
        }
        
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .subtitle {
          font-size: clamp(1.2rem, 3vw, 2rem);
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 3rem;
          font-weight: 300;
          letter-spacing: 0.1em;
          animation: fadeIn 2s ease-out 0.5s both;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .cta-button {
          display: inline-block;
          padding: 1.5rem 4rem;
          font-size: clamp(1rem, 2vw, 1.5rem);
          font-weight: 700;
          color: white;
          background: linear-gradient(135deg, #FFB6C1 0%, #4169E1 50%, #228B22 100%);
          border: none;
          border-radius: 50px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 20px 40px rgba(65, 105, 225, 0.4);
          animation: fadeIn 2s ease-out 1s both, pulse 2s ease-in-out 3s infinite;
          position: relative;
          overflow: hidden;
        }
        
        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }
        
        .cta-button:hover::before {
          left: 100%;
        }
        
        .cta-button:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 25px 50px rgba(65, 105, 225, 0.6);
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.5;
          animation: orbFloat 15s infinite ease-in-out;
        }
        
        .orb1 {
          width: 700px;
          height: 700px;
          background: #FFB6C1;
          top: -200px;
          left: -200px;
          animation-delay: 0s;
        }
        
        .orb2 {
          width: 600px;
          height: 600px;
          background: #4169E1;
          bottom: -150px;
          right: -150px;
          animation-delay: 5s;
        }
        
        .orb3 {
          width: 650px;
          height: 650px;
          background: #228B22;
          top: 50%;
          left: 50%;
          animation-delay: 10s;
        }
        
        @keyframes orbFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(50px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-50px, 50px) scale(0.9);
          }
        }
        
        @media (max-width: 768px) {
          .cta-button {
            padding: 1rem 2.5rem;
          }
          
          .subtitle {
            margin-bottom: 2rem;
          }
        }
      `}</style>

      <div className="ad-container">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
        
        <div className="content">
          <h1 className="title">SEE THE WORLD</h1>
          <p className="subtitle">Luke Stene Presents: A 3D Gallery</p>
          <Link href="/gallery" className="cta-button">
            EXPLORE NOW
          </Link>
        </div>
      </div>
    </>
  );
}