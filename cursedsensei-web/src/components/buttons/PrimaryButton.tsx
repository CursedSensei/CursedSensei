interface PrimaryButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    link?: string;
    newTab?: boolean;
}

export function PrimaryButton({ children, onClick, className, link, newTab }: PrimaryButtonProps) {
    if (link) {
        return (
            <a href={link} target={newTab ? "_blank" : "_self"} rel={newTab ? "noopener noreferrer" : undefined} className={`bg-button-bg active:bg-button-active hover:bg-button-hover text-white font-bold py-3 px-6 rounded-full transition duration-300 ${className}`}>
                {children}
            </a>
        );
    }
    return (
        <button
            onClick={onClick}
            className={`bg-button-bg active:bg-button-active hover:bg-button-hover text-white font-bold py-3 px-6 rounded-full transition duration-300 ${className}`}
        >
            {children}
        </button>
    );
}