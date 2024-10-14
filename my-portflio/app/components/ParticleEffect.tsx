'use client'

import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function ParticleEffect() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none'
    }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.5,
                },
              },
              bubble: {
                distance: 200,
                size: 10,
              },
              repulse: {
                distance: 150,
                factor: 5,
              },
              attract: {
                distance: 200,
                factor: 5,
              },
              connect: {
                distance: 150,
                links: {
                  opacity: 0.5,
                },
              },
              trail: {
                delay: 0.01,
                quantity: 110,
              },
            },
          },
          particles: {
            color: {
              value: ["#4285f4", "#34a853", "#fbbc05", "#ea4335"],
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
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
              value: 80,
            },
            opacity: {
              value: 0.5,
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
            zIndex: {
              value: { min: 0, max: 100 },
              opacityRate: 0.5,
              sizeRate: 0.5,
              velocityRate: 0.5,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}