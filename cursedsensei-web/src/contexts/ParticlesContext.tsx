import type { Engine } from "@tsparticles/engine";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { createContext, useContext, useEffect, useState } from "react";

interface ParticlesContextType {
    isEngineInitialized: boolean;
    setTheme: (theme: 'light' | 'dark') => void;
    theme: 'light' | 'dark';
}

const ParticlesContext = createContext<ParticlesContextType | undefined>(undefined);

export const ParticlesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isEngineInitialized, setIsEngineInitialized] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>(document.body.classList.contains('light') ? 'light' : 'dark');


    const contextValue: ParticlesContextType = {
        isEngineInitialized: isEngineInitialized,
        setTheme: setTheme,
        theme: theme
    };

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => {
            setIsEngineInitialized(true);
        });
    }, []);

    return (
        <ParticlesContext.Provider value={contextValue}>
            {children}
        </ParticlesContext.Provider>
    );
}

export const useParticles = (): ParticlesContextType => {
    const context = useContext(ParticlesContext);

    if (context === undefined) {
        throw new Error("useParticles must be used within a ParticlesProvider");
    }

    return context;
}