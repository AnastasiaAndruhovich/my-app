export default function Button({
                                   id,
                                   name,
                                   className,
                                   disabled,
                                   onClick
                               }: { id?: string, name: string, className: string, disabled?: boolean, onClick?: any }) {
    return (
        <button
            id={id}
            className={className + (disabled ? " opacity-50 " : "")} onClick={onClick} type="button">
            {name}
        </button>
    )
}