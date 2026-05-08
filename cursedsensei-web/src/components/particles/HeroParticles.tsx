import { MoveDirection, OutMode, type ISourceOptions } from "@tsparticles/engine";
import Particles from "@tsparticles/react";
import { useMemo, useState } from "react";
import { useParticles } from "../../contexts/ParticlesContext";

export default function HeroParticles() {
    const { isEngineInitialized, theme } = useParticles();
    const [isShown, setIsShown] = useState(true);

    const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
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
          opacity: 0.3,
          width: 1,
          frequency: 0.3,
        },
        move: {
          direction: theme === 'light' ? MoveDirection.bottomRight : MoveDirection.topLeft,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: theme === 'light' ? 5 : 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 50,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: ["circle", "square", "triangle"],
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      // detectRetina: true,
      detectRetina: false,
    }),
    [theme],
  );

    if (isShown && isEngineInitialized) {
        return <Particles options={options} />
    }
    return <></>
}