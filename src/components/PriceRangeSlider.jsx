import { Range } from 'react-range';

export function PriceRangeSlider({ min, max, step = 1, value, onChange }) {
    const [low, high] = value;
    const range = max - min;

    return (
        <div className="w-full px-2 py-4">

            <div className="flex justify-between mb-2 text-sm font-medium text-white px-1">
                <span>от</span>
                <span>до</span>
            </div>

            <Range
                values={[low, high]}
                step={step}
                min={min}
                max={max}
                onChange={onChange}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        className="relative w-full h-1 bg-gray-200 rounded-full"
                        style={{ ...props.style }}
                    >

                        <div
                            className="absolute h-1 bg-yellow-500 rounded-full"
                            style={{
                                left: `${((low - min) / range) * 100}%`,
                                width: `${((high - low) / range) * 100}%`,
                            }}
                        />
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        className="
              w-4 h-4 bg-white rounded-full shadow
              border-2 border-yellow-400
            "
                    />
                )}
            />


            <div className="flex justify-between mt-2 text-sm font-medium text-white px-1">
                <span>{low}</span>
                <span>{high}</span>
            </div>
        </div>
    );
}