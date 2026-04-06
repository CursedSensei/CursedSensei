import React from "react";
import { useParticles } from "../../contexts/ParticlesContext";
import MoonSvg from "../svg/MoonSvg";
import SunSvg from "../svg/SunSvg";

export default function NavBar() {
    const [theme, setTheme] = React.useState(document.body.classList.contains('light') ? 'light' : 'dark');
    const { setTheme: setParticlesTheme } = useParticles();

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            setParticlesTheme('dark');
            document.body.classList.toggle('light', false);
        } else {
            setTheme('light');
            setParticlesTheme('light');
            document.body.classList.toggle('light', true);
        }
    }

    return (
        <nav className="text-foreground py-4 fixed w-full z-20 bg-background/80 backdrop-blur-md border-b border-border top-0 left-0 select-none">
            <div className="container mx-auto flex items-center justify-between px-6">
                <div className="text-lg md:text-2xl font-bold">Z<span className="hidden sm:inline">illion</span></div>
                <div className="flex items-center gap-4">
                    <a href="#home" className="text-sm md:text-base hover:text-accent transition duration-300">Home</a>
                    <a href="#profile" className="text-sm md:text-base hover:text-accent transition duration-300">Profile</a>
                    <a href="#projects" className="text-sm md:text-base hover:text-accent transition duration-300">Projects</a>
                    <a href="#contact" className="text-sm md:text-base hover:text-accent transition duration-300">Contact</a>
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="inline-flex h-9 w-9 items-center justify-center text-foreground transition duration-300 hover:text-primary"
                        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
                    >
                        {theme === 'dark' ? <SunSvg /> : <MoonSvg />}
                    </button>
                </div>
            </div>
        </nav>
    );
}