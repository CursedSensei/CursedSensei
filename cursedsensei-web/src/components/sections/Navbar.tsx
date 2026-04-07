import { useEffect, useState } from "react";
import { useParticles } from "../../contexts/ParticlesContext";
import MoonSvg from "../svg/MoonSvg";
import SunSvg from "../svg/SunSvg";

function getMountedHeight() {
    return window.innerHeight - Math.max(window.innerHeight * 0.15, 0);
}

export default function NavBar() {
    const {theme, setTheme} = useParticles();
    const [isMounted, setIsMounted] = useState(false);
    const [screenHeight, setScreenHeight] = useState(getMountedHeight());

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            document.body.classList.toggle('light', false);
        } else {
            setTheme('light');
            document.body.classList.toggle('light', true);
        }
    }

    const handleScroll = () => {
        if (window.scrollY > screenHeight) {
            setIsMounted(true);
        } else {
            setIsMounted(false);
        }
    }

    const handleResize = () => {
        setScreenHeight(getMountedHeight());
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <nav className={`text-foreground pt-2 pb-3 fixed w-full z-20 top-0 left-1/2 transform -translate-x-1/2 transition-all duration-300 select-none border-transparent ${isMounted ? 'md:w-[90vw]! md:rounded-b-2xl bg-background/85 backdrop-blur-lg border-border! border-b md:border-x pb-2! hover:pb-3!' : ''}`}>
            <div className="container mx-auto flex items-center justify-between px-6 duration-200">
                <div className="text-lg md:text-2xl font-bold">Z<span className="hidden sm:inline">illion</span></div>
                <div className="flex items-center gap-4 md:gap-6">
                    <a href="#home" className="text-sm md:text-base hover:text-text-muted">Home</a>
                    <a href="#profile" className="text-sm md:text-base hover:text-text-muted">Profile</a>
                    <a href="#projects" className="text-sm md:text-base hover:text-text-muted">Projects</a>
                    <a href="#contact" className="text-sm md:text-base hover:text-text-muted">Contact</a>
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