  export function Toggle({
                           checked,
                           onChange,
                           disabled = false,
                           ariaLabel,
                       }) {
    return (
        <label
            className={`
        relative inline-flex items-center
        ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
      `}
        >

            <input
                type="checkbox"
                className="sr-only peer"
                checked={checked}
                onChange={e => onChange(e.target.checked)}
                disabled={disabled}
                aria-label={ariaLabel}
            />


            <div
                className={`
          w-[72px] h-[19px]
          bg-gray-200
          rounded-full
          peer-checked:bg-yellow-500
          transition-colors duration-200
        `}
            />


            <div
                className={`
          absolute left-0 top-[-5px]
          bg-gray-slider
          w-[28px] h-[28px]
          rounded-full
          shadow
          transform
          transition-transform duration-200
          peer-checked:translate-x-12
          peer-checked:bg-yellow-500
        `}
            />
        </label>
    );
}
