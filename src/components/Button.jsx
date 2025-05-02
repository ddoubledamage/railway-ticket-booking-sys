
function Button({text, onClick, className = '', type = 'button', variant = 'primary', size='medium'}) {

    const baseStyle = "font-semibold rounded-md cursor-pointer";

    const variantStyles = {
        searchTickets: 'bg-yellow-chromatic hover:shadow-xl active:bg-white active:text-yellow-chromatic',
        subscribe: 'bg-none border border-white hover:bg-yellow-light active:bg-white',
        moreInfo: 'bg-none border border-white hover:bg-yellow-light active:bg-white',
    }
    const sizeStyles ={
        extraSmall: 'w-5 h-5',
        small: 'w-8 h-8',
        medium: 'w-40 h-16',
        mediumPlus: 'w-56 h-9',
        big: 'w-80 h-16',
    }
    const buttonClass = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
    return (
        <button className={buttonClass} onClick={onClick} type={type}>
            {text.toUpperCase()}
        </button>
    );
}

export default Button;