
export function Pagination({currentPage = 1, totalPages = 3, onPageChange}) {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }
    return (
        <nav className="flex items-center justify-center space-x-9">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-[85px] h-[75px] flex items-center justify-center border rounded cursor-pointer
                ${currentPage === 1 ? 'text-gray-300 border-gray-200' : 'text-gray-600 border-gray-300'}`
            }
            >
            &lt;
            </button>

            {pages.map(page => {
                const isCurrent = page === currentPage;
                const isNext = page === currentPage + 1;

                let buttonClasses = 'w-[85px] h-[75px] flex items-center justify-center border rounded cursor-pointer';
                if (isCurrent) {
                    buttonClasses += ' bg-yellow-chromatic text-white border-yellow-500';
                } else if (isNext) {
                    buttonClasses += ' text-gray-600 border-gray-200';
                } else {
                    buttonClasses += ' text-gray-600 border-gray-200';
                }
                return (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={buttonClasses}
                    >
                        {page}
                    </button>
                );


            })}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`w-[85px] h-[75px] flex items-center justify-center border rounded cursor-pointer ${
                    currentPage === totalPages
                        ? 'text-gray-300 border-gray-200'
                        : 'text-gray-600 border-gray-300'
                }`}
            >
                &gt;
            </button>

        </nav>
    )
}