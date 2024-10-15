'use client'

import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function ParticleEffect() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine); // Load slim version of tsparticles for better performance
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none' // Makes sure the particles don't interfere with other interactions
    }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent", // Background color of the canvas (set to transparent)
            },
          },
          fpsLimit: 60, // Limits the frames per second to optimize performance
          interactivity: {
            events: {
              onHover: {
                enable: false, // Snowflakes do not react to hovering
                mode: "connect", // Other possible modes: "bubble", "repulse", "connect"
              },
              onClick: {
                enable: true, // No interactivity on click
                mode: "repulse", // Other possible modes: "push", "remove", "repulse", "bubble"
              },
              resize: true, // Automatically adjust particles when the window is resized
            },
            modes: {
              grab: {
                distance: 140, // Distance for grab effect (interaction when hovering)
                links: {
                  opacity: 0.5, // Opacity of the lines created when particles are grabbed
                },
              },
              bubble: {
                distance: 200, // Distance for bubble effect (when clicked or hovered)
                size: 10, // Size of particles during the bubble effect
                duration: 2, // Duration of the bubble effect
              },
              repulse: {
                distance: 200, // Distance for repulse effect (when particles repel on hover/click)
                duration: 0.3, // Duration of the repulse effect
              },
              push: {
                quantity: 4, // Number of particles added when clicking (push mode)
              },
              remove: {
                quantity: 2, // Number of particles removed when clicking (remove mode)
              },
            },
          },
          particles: {
            number: {
              value: 200, // Number of particles (snowflakes)
              density: {
                enable: true, // Enable particle density based on the area
                area: 900, // Area size used to calculate the density
              },
            },
            color: {
              value: ["#c7b8ec", "#89618c", "#F2E5EE", "#f7e6B7", "#e0f8f5", "#ffdad1"], // Array of colors for particles (customize snowflake colors)
            },
            shape: {
              type: "star", // Shape of the particles (snowflakes)
              // Possible shapes: "circle", "edge", "triangle", "star", "polygon", "image"
            },
            opacity: {
              value: 0.6, // Base opacity level for particles
              random: true, // Randomize opacity for a more natural snow effect
              animation: {
                enable: true, // Enable opacity animation
                speed: 1, // Speed of opacity animation
                minimumValue: 0.1, // Minimum opacity value during animation
                sync: false, // If true, particles animate opacity together; otherwise, they animate independently
              },
            },
            size: {
              value: { min: 1, max: 4 }, // Snowflakes vary in size
              random: true, // Randomize the size for each particle
              animation: {
                enable: true, // Enable size animation
                speed: 1, // Speed of size animation
                minimumValue: 0.1, // Minimum size value during animation
                sync: false, // If true, particles animate size together; otherwise, independently
              },
            },
            move: {
              enable: true, // Enable movement of particles
              speed: 1, // Speed of the particle movement
              direction: "bottom", // Direction of movement ("none", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left")
              random: false, // If true, particles move in a random direction
              straight: false, // If true, particles move in a straight line
              outModes: {
                default: "out", // What happens when particles leave the canvas: "out", "bounce", or "destroy"
              },
              trail: {
                enable: false, // Enable/disable a particle trail effect (snowflake trail)
                length: 6, // Length of the trail if enabled
                fillColor: "#000000", // Color of the trail
              },
            },
            links: {
              enable: false, // Disables links between particles (optional)
              distance: 150, // Maximum distance for linking particles
              color: "#ffffff", // Color of the lines that link particles
              opacity: 0.4, // Opacity of the links
              width: 1, // Width of the links
            },
          },
          detectRetina: true, // Improves clarity on high-DPI (retina) screens
        }}
      />
    </div>
  );
}