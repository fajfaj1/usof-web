import './button.css';
export function Button({
    style = "secondary",
    size = "normal",
    children,
    disabled = false,
    onClick = () => { } }) {
    return (<button className={`button button-${style} button-${size} ${disabled ? 'button-disabled' : ''}`} onClick={onClick}>
        {children}
    </button>);
}