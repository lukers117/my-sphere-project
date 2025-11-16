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
      particle.style.cssText = `
        position: absolute;
        width: 3px;
        height: 3px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: float ${15 + Math.random() * 10}s infinite;
        animation-delay: ${Math.random() * 20}s;
        pointer-events: none;
      `;
      particle.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
      particle.style.setProperty('--ty', (Math.random() - 0.5) * 200 + 'px');
      
      container.appendChild(particle);
    }

    // Add keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% {
          transform: translate(0, 0) scale(1);
          opacity: 0;
        }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% {
          transform: translate(var(--tx), var(--ty)) scale(0);
          opacity: 0;
        }
      }
      @keyframes orbFloat {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(50px, -50px) scale(1.1); }
        66% { transform: translate(-50px, 50px) scale(0.9); }
      }
      @keyframes gradientShift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div 
      className="ad-container"
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        background: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }}
    >
      {/* Orbs */}
      <div style={{
        position: 'absolute',
        width: '700px',
        height: '700px',
        background: '#FFB6C1',
        borderRadius: '50%',
        filter: 'blur(120px)',
        opacity: 0.5,
        top: '-200px',
        left: '-200px',
        animation: 'orbFloat 15s infinite ease-in-out',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        background: '#4169E1',
        borderRadius: '50%',
        filter: 'blur(120px)',
        opacity: 0.5,
        bottom: '-150px',
        right: '-150px',
        animation: 'orbFloat 15s infinite ease-in-out 5s',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        width: '650px',
        height: '650px',
        background: '#228B22',
        borderRadius: '50%',
        filter: 'blur(120px)',
        opacity: 0.5,
        top: '50%',
        left: '50%',
        animation: 'orbFloat 15s infinite ease-in-out 10s',
        pointerEvents: 'none'
      }} />
      
      {/* Content */}
      <div style={{
        textAlign: 'center',
        zIndex: 10,
        padding: '0 20px'
      }}>
        <h1 style={{
          fontSize: 'clamp(3rem, 12vw, 8rem)',
          fontWeight: 900,
          background: 'linear-gradient(135deg, #FFB6C1 0%, #4169E1 50%, #228B22 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '1rem',
          letterSpacing: '-0.02em',
          lineHeight: 1,
          animation: 'gradientShift 3s ease infinite',
          backgroundSize: '200% 200%',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }}>
          SEE THE WORLD
        </h1>
        
        <p style={{
          fontSize: 'clamp(1.2rem, 3vw, 2rem)',
          color: 'rgba(255, 255, 255, 0.9)',
          marginBottom: '3rem',
          fontWeight: 300,
          letterSpacing: '0.1em',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }}>
          Luke Stene Presents: A 3D Gallery
        </p>
        
        <Link 
          href="/gallery"
          style={{
            display: 'inline-block',
            padding: '1.5rem 4rem',
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            fontWeight: 700,
            color: 'white',
            background: 'linear-gradient(135deg, #FFB6C1 0%, #4169E1 50%, #228B22 100%)',
            border: 'none',
            borderRadius: '50px',
            textDecoration: 'none',
            cursor: 'pointer',
            boxShadow: '0 20px 40px rgba(65, 105, 225, 0.4)',
            animation: 'pulse 2s ease-in-out infinite',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(65, 105, 225, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(65, 105, 225, 0.4)';
          }}
        >
          EXPLORE NOW
        </Link>
      </div>
    </div>
  );
}