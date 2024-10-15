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
        direction: "bottom" as "bottom", // Ensure correct type
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
          area: 900,
        },
        value: 200,
      },
      opacity: {
        value: 0.7,
        animation: {
          enable: true,
          speed: 0.3,
          minimumValue: 0.2,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.5,
        },
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
        direction: "top" as "top", // Ensure correct type
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
      id="particles-container"
      className="absolute top-0 left-0 w-full z-[-1]">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={effect === 'snow' ? snowOptions : fireOptions}
      />
    </div>
  );
}