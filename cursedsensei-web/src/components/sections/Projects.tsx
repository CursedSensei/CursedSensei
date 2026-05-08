export default function Projects() {
    const projects = [
        {
            title: 'OchreTech Logistics',
            desc: 'A full-stack contract management platform with its main feature to extract PDF shipping contracts utilizing Python parsing libraries added with multiprocessing algorithm for an efficient and fast extraction.',
            tech: ['Next.js', 'TypeScript', 'Tailwind', 'Spring Boot', 'Python'],
            url: null,
        },
        {
            title: 'L-20 Mixer Control Web Interface',
            desc: 'A modern web-based control interface for the Zoom L-20 mixer, built specifically for musicians to control their personal monitor mix volumes. This application provides real-time mixing capabilities with an intuitive UI for controlling faders, effects, and monitor sends directly from any device on the network.',
            tech: ['Next.js', 'TypeScript', 'Tailwind', 'Python', 'Websockets', 'TCP Sockets', 'BLE Communication'],
            url: 'https://github.com/CursedSensei/l-20_control_web',
        },
        {
            title: 'LittleHirishima Discord Bot',
            desc: 'A Python Discord bot focused on voice/music playback from YouTube. It supports slash commands for queue management, loop modes, pause/resume, seek, shuffle, and now-playing embeds.',
            tech: ['Python', 'Pycord', 'Yt-dlp', 'FFmpeg'],
            url: 'https://github.com/CursedSensei/LittleHirishima',
        },
        {
            title: 'ClarityChain',
            desc: 'A transparent donation platform built on Polkadot Hub where organizations and individuals can create campaigns and receive funds with one critical constraint in that they can only send those funds by to whitelisted vendors.',
            tech: ['Next.js', 'TypeScript', 'Tailwind', 'Solidity'],
            url: 'https://github.com/DymNomZ/ClarityChain',
        },
        {
            title: 'EloquenceAuth',
            desc: 'A Minecraft Fabric mod that injects a authentication patches that cater to Offline mode servers.',
            tech: ['Java', 'Fabric API', 'Mixin'],
            url: 'https://github.com/CursedSensei/EloquenceAuth',
        },
        {
            title: 'Racho Veterinary Clinic Website',
            desc: 'A simple informational website for a local veterinary clinic, featuring sections for services, team, contact information, and an appointment booking form.',
            tech: ['PHP', 'jQuery', 'MySQL', 'Bootstrap'],
            url: 'https://www.rachovet.com',
        }
    ];

    return (
        <section id="projects" className="py-32">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8">Projects</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {projects.map((p) => (
                        <article key={p.title} className="flex flex-col p-6 bg-surface rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                            <p className="text-sm text-text-muted mb-4 text-justify">{p.desc}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {p.tech.map((t) => (
                                    <span key={t} className="text-xs px-2 py-1 bg-tag rounded">{t}</span>
                                ))}
                            </div>
                            {p.url && (
                                <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-auto text-accent hover:underline">View project</a>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}