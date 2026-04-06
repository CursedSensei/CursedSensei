import { MoveDirection, OutMode, type ISourceOptions } from "@tsparticles/engine";
import Particles from "@tsparticles/react";
import { useMemo } from "react";
import { useParticles } from "../../contexts/ParticlesContext";

export default function HeroParticles() {
    const { isEngineInitialized, theme } = useParticles();

    const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: theme === 'light' ? "#000000" : "#ffffff",
        },
        links: {
          color: theme === 'light' ? "#000000" : "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 30,
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
      },
      detectRetina: true,
    }),
    [theme],
  );

    if (isEngineInitialized) {
        return <Particles options={options} />
    }
    return <></>
}