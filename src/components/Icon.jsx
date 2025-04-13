function Icon({name, className="", children}) {
    return (
        <div>
            <svg className={className}>
                <use xlinkHref={`./icons/icons.svg#${name}`} />
            </svg>
            {children}
        </div>

    )
}
export default Icon;