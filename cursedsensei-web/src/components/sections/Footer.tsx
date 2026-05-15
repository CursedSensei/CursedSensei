import { Mail, Phone, SquareArrowOutUpRight } from 'lucide-react';

export default function Footer() {
    return (
        <section id="contact" className="py-20 bg-surface/40 backdrop-blur-md">
            <div className="container mx-auto px-6 max-w-2xl">
                <h2 className="text-3xl text-foreground font-bold mb-6">Let’s Talk</h2>

                <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded">
                        <Mail className="inline-block mr-2 mt-1 w-5 h-5 text-accent mb-2" />
                        <a href="mailto:ccszillion@gmail.com" className="wrap-break-word">ccszillion@gmail.com</a>
                    </div>
                    <div className="p-4 rounded">
                        <Phone className="inline-block mr-2 mt-1 w-5 h-5 text-accent mb-2" />
                        <a href="tel:+639273051268" >(+63) 927-305-1268</a>
                    </div>
                    <div className="p-4 rounded">
                        <SquareArrowOutUpRight className="inline-block mr-2 mt-1 w-5 h-5 text-accent mb-2" />
                        <a href="https://www.linkedin.com/in/john-zillion-reyes-1b4013390" target="_blank" rel="noopener noreferrer" >linkedin.com/zillion</a>
                    </div>
                    <div className="p-4 rounded">
                        <Phone className="inline-block mr-2 mt-1 w-5 h-5 text-accent mb-2" />
                        <a href="tel:+639910898581" >(+63) 991-089-8581</a>
                    </div>
                </div>
            </div>
        </section>
    );
}