export default function Profile() {
    return (
        <section className="w-full min-h-screen py-32 grid grid-cols-1 lg:grid-cols-2 gap-9 bg-primary" id="profile">
            <div className="mx-auto px-16 lg:px-28 flex flex-col justify-center h-full">
                <img src="/profile.jpg" alt="Profile Picture" className="mx-auto object-cover aspect-square w-full max-w-96 max-h-96 rounded-3xl select-none shadow-2xl shadow-background"/>
            </div>
            <div className="my-auto px-16 lg:px-28 text-white">
                <h4 className="text-xl md:text-2xl mb-6 tracking-tight text-justify">
                    <span className="font-bold tracking-wider">Battle-hardened</span> 3rd-year Computer Science student and
                    freelance Full-stack Developer with a proven track profile of
                    delivering production-ready solutions for diverse clients. Currently
                    looking forward to new environments and technologies yet to be
                    explored.
                </h4>

                <div className="mt-8">
                    <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
                        {[
                            { name: 'Next.js', id: 'nextdotjs' },
                            { name: 'Spring Boot', id: 'springboot' },
                            { name: '.NET', id: 'dotnet' },
                            { name: 'PHP', id: 'php' },
                            { name: 'Docker', id: 'docker' },
                            { name: 'Cloudflare', id: 'cloudflare' },
                            { name: 'Nginx', id: 'nginx' },
                            { name: 'Django', id: 'django' },
                            { name: 'C/C++', id: 'cplusplus' },
                            { name: 'Java', id: 'java' },
                            { name: 'Python', id: 'python' },
                            { name: 'MySQL', id: 'mysql' },
                            { name: 'Postgres', id: 'postgresql' },
                            { name: 'TensorFlow', id: 'tensorflow' },
                        ].map((t) => (
                            <figure key={t.id} className="flex flex-col items-center w-20">
                                <img
                                    src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${t.id}.svg`}
                                    alt={t.name}
                                    title={t.name}
                                    className="w-12 h-12 object-contain" 
                                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                                />
                                <figcaption className="text-xs text-center mt-2">{t.name}</figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}