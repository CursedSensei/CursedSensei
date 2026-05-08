import { Globe, SquareArrowOutUpRight } from 'lucide-react';
import { useCallback } from 'react';
import '../../css/Hero.css';
import useWindowScrollY from '../../hooks/useWindowScrollY';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { SecondaryButton } from '../buttons/SecondaryButton';
import HeroParticles from '../particles/HeroParticles';

export function HeroText() {
    const scrollY = useWindowScrollY();

    const HoverSpan = useCallback(({children}: {children: React.ReactNode}) => (
        <span className="hover:text-accent transition duration-300">
            {children}
        </span>
    ), []);

    return (
        <div className={`container mx-auto px-6 text-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none ${scrollY > window.innerHeight * 1.2 ? 'hidden' : ''}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-widest" id="hero_title">John Zillion Reyes</h1>
            <p className="text-lg md:text-2xl mb-8 text-text-muted tracking-tight">
                <HoverSpan>Full-Stack Developer</HoverSpan> | <HoverSpan>Systems Administrator</HoverSpan>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SecondaryButton link="https://github.com/CursedSensei" newTab={true} className="mx-auto md:mr-0">
                    <Globe className="inline-block h-5 mr-0.5 mb-0.5" /> View Github
                </SecondaryButton>
                <PrimaryButton link="http://www.eloquenceprojects.org/reyes/Zillion_Resume.pdf" newTab className="mx-auto md:ml-0">
                    <SquareArrowOutUpRight className="inline-block h-5 mr-0.5 mb-0.5" /> View Resume
                </PrimaryButton>
            </div>
        </div>
    )
}

export default function Hero() {
    return (
        <section id='home'>
            <HeroParticles />
            <HeroText />
        </section>
    );
}