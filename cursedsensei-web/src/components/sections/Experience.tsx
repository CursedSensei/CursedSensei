import { Link } from "lucide-react";

export default function Experience() {
    const timeline = [
        {
            role: 'Systems Administrator & Full-stack Developer',
            org: 'Cenixys',
            link: 'https://cenixys.com',
            period: '2023 — Present',
            bullets: [
                'Project-based freelancing company',
                'Developed and collaborated on multiple projects using PHP, Next.js, Flutter and Django',
                'Managed the end-to-end deployment of hosted projects utilizing Docker and Nginx',
                'Maintained system integrity by tracking cybersecurity vulnerabilities and optimizing server performance'
            ],
        },
    ];

    return (
        <section id="experience" className="py-32 bg-secondary/85 backdrop-blur-xs">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8 text-white">Experience</h2>
                <div className="space-y-6">
                    {timeline.map((item) => (
                        <div key={item.role} className="p-6 bg-surface rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-xl font-semibold">{item.role}</h3>
                                    {item.link ? (
                                        <div className="flex gap-1">
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted underline">{item.org} </a>
                                            <Link className="w-2 h-2 mt-1 mr-1 text-text-muted" />
                                        </div>
                                    ) : (
                                        <p className="text-sm text-text-muted">{item.org}</p>
                                    )}
                                </div>
                                <span className="text-sm text-text-muted">{item.period}</span>
                            </div>
                            <ul className="list-disc pl-5 text-sm mt-2">
                                {item.bullets.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}