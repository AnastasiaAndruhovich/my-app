export default function Button ({id, name, className, disabled, onClick}) {
    return (
        <button
            id={id}
            className={className + (disabled ? " opacity-50 " : "")} onClick={onClick} type="button">
            {name}
        </button>
    )
}