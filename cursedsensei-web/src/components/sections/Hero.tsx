import '../../css/Hero.css';
import HeroParticles from '../particles/HeroParticles';

export default function Hero() {
    const HoverSpan = ({children}: {children: React.ReactNode}) => (
        <span className="hover:text-accent transition duration-300">
            {children}
        </span>
    );

    return (
        <section id='home'>
            <HeroParticles />
            <div className="container mx-auto px-6 text-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">John Zillion Reyes</h1>
                <p className="text-lg md:text-2xl mb-8 text-text-muted">
                    <HoverSpan>Full-Stack Developer</HoverSpan> | <HoverSpan>Systems Administrator</HoverSpan>
                </p>
                <a href="#learn-more" className="bg-button-bg active:bg-button-active hover:bg-button-hover text-white font-bold py-3 px-6 rounded-full transition duration-300">Learn More</a>
            </div>
        </section>
    );
}