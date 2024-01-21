export default function Button({
                                   id,
                                   name,
                                    isDelete,
                                   onClick
                               }: { id?: string, name: string, isDelete?: boolean, onClick?: any }) {
    return (
        <button
            id={id}
            className={"inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 " + (isDelete ? "bg-red-600 hover:bg-red-300 active:bg-red-300" : "bg-blue-600 hover:bg-blue-300 active:bg-blue-300")}
            onClick={onClick} type="button">
            {name}
        </button>
    )
}