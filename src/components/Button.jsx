import "./button.css"
export default function Button({
    children,
    onClick,
    type = "button",
    className = "",
    ...props
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`btn_2 ${className}`}
        >
            {children}
        </button>
    );
}