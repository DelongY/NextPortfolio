'use client'
import React, { useCallback, useEffect, useState, useRef } from 'react';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function ParticleEffect({ effect = 'snow' }) {
  const particlesContainerRef = useRef<HTMLDivElement>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.target === document.body) {
          const homeSection = document.getElementById('home');
          if (homeSection && particlesContainerRef.current) {
            const homeSectionHeight = homeSection.offsetHeight;
            particlesContainerRef.current.style.height = `${homeSectionHeight}px`;
          }
        }
      }
    });

    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const snowOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: ["#c7b8ec", "#89618c", "#F2E5EE"],
      },
      move: {
        direction: "bottom" as const, // Use "bottom" as const to specify the type
        enable: true,
        outModes: {
          default: "out",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 90,
      },
      opacity: {
        value: 0.6,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
      wobble: {
        enable: true,
        distance: 10,
        speed: 10,
      },
    },
    detectRetina: true,
  };

  const fireOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: ["#c7b8ec", "#89618c", "#F2E5EE"],
      },
      move: {
        direction: "top" as const, // Use "top" as const to specify the type
        enable: true,
        outModes: {
          default: "out",
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 900,
        },
        value: 120,
      },
      opacity: {
        value: 0.5,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.5,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <div
      ref={particlesContainerRef}
      style={{
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={effect === 'snow' ? snowOptions : fireOptions}
      />
    </div>
  );
}