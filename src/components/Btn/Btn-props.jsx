import '../Btn/Btn-props.css'

export function Btn({ text, onClick, className }) {
    return (
        <button onClick={onClick} className={className}>{text}</button>
    );
}