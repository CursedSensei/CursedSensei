import { Link } from "lucide-react";

export default function Certifications() {
    const certs = [
        { name: 'PhilNITS Fundamental IT Engineer', issuer: 'PhilNITS', year: 'Oct 2025', link: 'https://www.itpec.org/statsandresults/all-passers-information/Philippines/2025A_FE.pdf' },
        { name: 'CodeChum Java Object-Oriented Programming', issuer: 'CodeChum', year: '2025', link: 'https://citu.codechum.com/certificates/10007' },
        { name: 'Top 7 - CodeChum C Programming', issuer: 'CodeChum', year: '2024', link: 'https://citu.codechum.com/certificates/811' },
    ];

    return (
        <section id="certifications" className="py-32">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8">Certifications</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    {certs.map((c) => (
                        <div key={c.name} className="p-4 bg-surface rounded-lg">
                            {c.link ? (
                                <div className="flex gap-1">
                                    <h4 className="font-semibold">{c.name}</h4>
                                    <a href={c.link} target="_blank" rel="noopener noreferrer"><Link className="w-3 h-3 mt-1" /></a>
                                </div>
                            ) : (
                                <h4 className="font-semibold">{c.name}</h4>
                            )}
                            <p className="text-sm text-text-muted">{c.issuer}{c.year ? ' • ' + c.year : ''}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}