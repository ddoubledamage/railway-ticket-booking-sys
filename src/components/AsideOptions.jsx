import Icon from "./Icon.jsx";

function AsideOptions({iconName, label, children}){
    return (
        <div className="w-3/4 flex items-center justify-between py-6">
            <div className="flex items-center gap-4">
                {iconName && <Icon name={iconName} className="w-5 h-5"/>}
                <span className="text-white text-secondary">{label}</span>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default AsideOptions;