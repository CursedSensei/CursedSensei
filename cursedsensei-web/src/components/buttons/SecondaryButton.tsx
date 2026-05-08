interface SecondaryButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    link?: string;
    newTab?: boolean;
    download?: boolean;
}

export function SecondaryButton({ children, onClick, className, link, newTab, download }: SecondaryButtonProps) {
    if (link) {
        return (
            <a href={link} target={newTab ? '_blank' : undefined} rel={newTab ? 'noopener noreferrer' : undefined} download={download} className={`bg-background active:bg-button-active hover:bg-surface text-foreground font-bold border border-foreground/10 py-3 px-6 rounded-full transition duration-300 ${className}`}>
                {children}
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            className={`bg-background active:bg-button-active hover:bg-surface text-foreground font-bold border border-foreground/10 py-3 px-6 rounded-full transition duration-300 ${className}`}
        >
            {children}
        </button>
    );
}